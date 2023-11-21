import Head from 'next/head';
import React from 'react';

import Breadcrumb from '../components/Breadcrumb';
import Breadcrumbs from '../components/Breadcrumbs';
import ListingCard from '../components/ListingCard';



const Listings = ({ listings, search } : any) => {
  return (
    <>
      <Head>
        <title> Browsing Listings | auctionweb.site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
        {listings?.map((listing : any, idx : any) => (
          <ListingCard
            key={idx}
            name={listing.title}
            expiresAt={listing.expiresAt}
            price={listing.currentPrice}
            smallImage={listing.smallImage}
            slug={`/listings/${listing.slug}`}
          />
        ))}
      </div>
    </>
  );
};

Listings.getInitialProps = async ({ query }: any, client : any) => {
  const { data } = await client.get(
    `/api/listings?search=${query.search || ''}`
  );

  return { listings: data || [], search: query.search };
};

export default Listings;