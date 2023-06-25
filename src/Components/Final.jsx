import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/CircleLoader";
import github from "../Assets/github.png";

function Final() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 15000);
  }, []);

  return (
    <div className="flex flex-col h-[100%] w-[100%] items-center justify-center">
      {loading ? (
        <ClipLoader
          color={"#8257E5"}
          loading={loading}
          size={70}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <p className="flex w-[100%] justify-center items-center text-center font-roboto_bold text-3xl pb-12">
            Thank you for subscribing
          </p>
        </>
      )}
    </div>
  );
}

export default Final;
