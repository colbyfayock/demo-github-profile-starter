import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Layout from '@components/Layout';
import Container from '@components/Container';
import Button from '@components/Button';

import images from '@data/images';

import styles from '@styles/Home.module.scss'

export default function Home() {
  const router = useRouter()

  function handleOnSubmit(event) {
    event.preventDefault();

    const fields = Array.from(event.currentTarget.elements);
    const username = fields.find(field => field.name === 'username')?.value;

    router.push(`/user/${username}`);
  }

  return (
    <Layout>
      <Head>
        <title>GitHub Profiler</title>
        <meta name="description" content="See all your GitHub user stats!" />
      </Head>

      <Container>
        <h1 className="sr-only">GitHub Profiler</h1>

        <h2 className={styles.header}>Enter a GitHub Username</h2>

        <form className={styles.form} onSubmit={handleOnSubmit}>
          <p>
            <input type="text" name="username" />
          </p>
          <p>
            <Button>Get Profile</Button>
          </p>
        </form>

      </Container>
    </Layout>
  )
}