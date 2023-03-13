import HomeComponent from "@/components/Home";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>| Hüseyin Erkal</title>
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="hsynerkl"
          data-description="Support me on Buy me a coffee!"
          data-message=""
          data-color="#5F7FFF"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
          async
        ></script>
      </Head>
      <HomeComponent />
    </>
  );
}
