import React, { useState } from 'react';
import './filter.scss';
import { useSearchParams } from 'react-router-dom';

const Filter = () => {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || 0,
    maxPrice: searchParams.get("maxPrice") || 1000000,
    bedroom: searchParams.get("bedroom") || 1,
  });

  const handleChange = (e) => {
    setQuery(prevQuery => ({
      ...prevQuery,
      [e.target.name]: e.target.value
    }));
  };

  const handleFilter = () => {
    setSearchParams(query);
  }

  return (
    <section className='filter'>
      <h1>Search results for <b>{searchParams.get("city")}</b></h1>

      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input defaultValue={query.city} type="text" id="city" name="city" placeholder='City Location' onChange={handleChange} />
        </div>
      </div>

      <div className="bottom">

        <div className="item">
          <label htmlFor="type">Type</label>
          <select defaultValue={query.type} name="type" id="type" onChange={handleChange}>
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="property">Property</label>
          <select defaultValue={query.property} name="property" id="property" onChange={handleChange}>
            <option value="">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input defaultValue={query.minPrice} type="number" id="minPrice" name="minPrice" placeholder='Any' onChange={handleChange} />
        </div>

        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input defaultValue={query.maxPrice} type="number" id="maxPrice" name="maxPrice" placeholder='Any' onChange={handleChange} />
        </div>

        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input defaultValue={query.bedroom} type="text" id="bedroom " name="bedroom" placeholder='Any' onChange={handleChange} />
        </div>

        <button onClick={handleFilter}>
          <img src="/search.png" alt="search button" />
        </button>

      </div>
    </section>
  );
};

export default Filter;