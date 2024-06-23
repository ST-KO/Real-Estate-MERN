import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const getPosts = async (req, res) => {
  const query = req.query;
  console.log(query);
  try {
    const posts = await prisma.post.findMany({
      where: {
        city: query.city || undefined,
        type: query.type || undefined,
        property: query.property || undefined,
        bedroom: parseInt(query.bedroom) || undefined,
        price: {
          gte: parseInt(query.minPrice) || undefined,
          lte: parseInt(query.maxPrice) || undefined,
        },
      },
    });
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get posts" });
  }
};

export const getSinglePost = async (req, res) => {
  const id = req.params.id;

  try {
    const singlePost = await prisma.post.findUnique({
      where: { id },
      include: {
        postDetail: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });

    // ....... Saved Posts .......
    // Check if the user is logged in and verify
    let userId;
    const token = req.cookies.token;

    if (!token) {
      userId = null;
    } else {
      jwt.verify(token, process.env.JWT_SECRET_KEY, async (error, info) => {
        if (error) {
          userId = null;
        } else {
          userId = info.id;
        }
      });
    }

    // Then look for user's saved post with its id
    const savedPost = await prisma.savedPost.findUnique({
      where: {
        userId_postId: {
          postId: id,
          userId,
        },
      },
    });

    res.status(200).json({ ...singlePost, isSaved: savedPost ? true : false });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get a post" });
  }
};

export const addPost = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;

  try {
    const newPost = await prisma.post.create({
      data: {
        ...body.postData,
        userId: tokenUserId,
        postDetail: {
          create: body.postDetail,
        },
      },
    });
    res.status(200).json(newPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create post" });
  }
};

export const updatePost = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update post" });
  }
};

export const deletePost = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (post.userId !== tokenUserId) {
      return res.status(403).json({ message: "Not Authorised" });
    }

    await prisma.post.delete({
      where: { id },
    });

    res.status(200).json({ message: "Post Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete post" });
  }
};
