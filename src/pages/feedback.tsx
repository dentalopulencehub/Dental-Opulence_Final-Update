import Head from "next/head";
import { Layout } from "../components/import";
import FeedbackFlow from "../components/compound/FeedbackFlow";

export default function Feedback() {
  return (
    <Layout>
      <Head>
        <title>Patient Feedback | Dental Opulence</title>
        <meta
          name="description"
          content="Share anonymous feedback about your experience at Dental Opulence. Takes 1-2 minutes, no contact details needed."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <FeedbackFlow />
    </Layout>
  );
}
