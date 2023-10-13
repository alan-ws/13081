import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  return {
    props: {
      locale,
    },
  };
}

export default function Home({
  locale,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <h1>{locale}</h1>;
}
