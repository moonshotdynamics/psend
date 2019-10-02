import React from 'react';
import style from '../styles/styles.scss';
import Link from 'next/Link';
import Layout from '../components/layout';
import Header from '../components/header';

export default function Index(){
  return (
    <Layout>
      <section className="section">
        <div className="container">
        <h1 className="title"> PSend</h1>
        </div>
      </section>
    </Layout>
  );
}

//npm run dev