import Head from 'next/head';
import React from 'react';

import Breadcrumb from '../components/Breadcrumb';
import Breadcrumbs from '../components/Breadcrumbs';
import ListingCard from '../components/ListingCard';
import Navbar from '../components/navbar/Navbar';



const Listings = ({ listings, search } : any) => {
  return (
    <>
      <Head>
        <title> Browsing Listings | auctionweb.site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar/>
      <Breadcrumbs>
        <Breadcrumb link="/" name="Home" />
        <Breadcrumb link="/listings" name="Browse Listings" />
      </Breadcrumbs>
      <section className="pt-3 mb-3">
        <h3 className="text-3xl leading-tight font-semibold font-heading">
          Showing {!search ? 'all listings' : `results for "${search}"`}
        </h3>
      </section>
      <div className='py-3 flex flex-wrap -mx-2 -mb-4'>
        <ListingCard
            key="0"
            name="first item"
            expiresAt="1 day"
            price = "1000"
            smallImage="img0"
            slug="/listings/0"
          />
          <ListingCard
            key="1"
            name="second item"
            expiresAt="3 day"
            price = "1200"
            smallImage="img1"
            slug="/listings/1"
          />
          <ListingCard
            key="2"
            name="third item"
            expiresAt="4 day"
            price = "1220"
            smallImage="img2"
            slug="/listings/2"
          />
      </div>
    </>
  );
};

/*
Listings.getInitialProps = async ({ query }: any, client : any) => {
  const { data } = await client.get(
    `/api/listings?search=${query.search || ''}`
  );

  return { listings: data || [], search: query.search };
};
*/

export default Listings;