import { useEffect } from "react";
import ReactGA from "react-ga4";

export const Visits = ({ visits }) => {
  useEffect(() => {
    // const getVisits = async () => {
    //   const url =
    //     "https://api.github.com/repos/betoayza/portfolio/traffic/views";
    //   const options = {
    //     headers: {
    //       Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    //     },
    //     timeout: 3000,
    //   };

    //   await axios
    //     .get(url, options)
    //     .then((res) => {
    //       console.log(res.data);
    //       setVisits(res.data.count);
    //     })
    //     .catch((error) => error);
    // };

    // getVisits();

    // ReactGA.initialize("UA-12345-1", {
    //   gaOptions: {
    //     userId: "user-id-from-auth-system",
    //   },
    // });

    let dsa = ReactGA.initialize(`${import.meta.env.VITE_TRACKING_ID}`);
    ReactGA.send({
      hitType: "pageview",
      page: "https://betoayza.github.io/portfolio/",
    });
    let asd = ReactGA.event({
      category: "Link",
      action: "Clicked",
    });

    console.log(dsa, asd);
    // ReactGA.event({
    //   category: "Page View",
    //   action: "https://betoayza.github.io/portfolio/",
    // });
    // let views = ReactGA.get("category");
    // ReactGA.pageview("https://betoayza.github.io/portfolio/");
    // console.log(views);
    // setVisits(views);
  }, []);

  return (
    <div className={"text-center"}>
      <h2>Visits: {visits}</h2>
    </div>
  );
};
