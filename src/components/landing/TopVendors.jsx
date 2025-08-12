import Cards from '../Cards'

function TopVendors() {
  return (
    <>
      <div id="topVendors">
        <div className="vendorsTitle">
          <h1>
            <span>Today </span>
            <span style={{ color: "#FDC55E" }}>Top Local</span>
            <span>
              {" "}
              <br />
              Dish{" "}
            </span>
            <span style={{ color: "#FDC55E" }}>Vendors</span>
          </h1>
          <h4>
            &quot;With today&apos;s best local cuisine sellers, experience the
            best flavours! Enjoy Nigerian cuisine at well-known restaurants.
            Discover them all with ease, then savour the finest Nigerian
            food&quot;&ldquo;
          </h4>
        </div>
      </div>
      <Cards />
    </>
  );
}

export default TopVendors