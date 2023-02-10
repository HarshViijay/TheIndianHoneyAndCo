import "tw-elements";
import styles from "../style";
import { FullStar, ZeroStar } from ".";

const Products = () => (
  <section
    id="products"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <br />
    <br />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Discover our Products
        <br className="sm:block hidden" />
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-full`}>
          Pick from a range of delicious honey & get it delivered to your home
        </p>
      </div>
    </div>

    <br />
    <br />

    <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient bottom-40" />

    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div class="flex justify-center grid grid-cols-3 divide-x gap-12 content-between">
      <div class="rounded-lg shadow-lg bg-stone-200 max-w-sm transform transition duration-500 hover:scale-105">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img
            class="rounded-t-lg w-[500px] h-[350px] p-4"
            src="https://cdn.shopify.com/s/files/1/0609/3373/4626/products/honey_700x.jpg?v=1665476682"
            alt=""
          />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl mb-2 font-semibold">
            Kashmiri Honey
          </h5>
          <p class="text-gray-700 text-base mb-4">
            This Amber coloured, velvety honey with the most pleasant aroma
            comes from the valleys of Kashmir.
          </p>

          <div class="flex items-center">
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />

            <p class="ml-2 text-sm font-medium text-gray-600">4.85 / 5</p>
          </div>

          <div class="flex items-center justify-between mt-1.5">
            <span class="text-[22px] font-bold text-gray-900">Rs. 650.00</span>

            <button
              type="button"
              class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div class="rounded-lg shadow-lg bg-stone-200 max-w-sm transform transition duration-500 hover:scale-105">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img
            class="rounded-t-lg w-[500px] h-[350px] p-4"
            src="https://cdn.shopify.com/s/files/1/0282/4047/8260/products/RawWildflowerRawForest-min_1024x1024@2x.jpg?v=1644823444"
            alt=""
          />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl mb-2 font-semibold">
            Raw Wildflower Honey
          </h5>
          <p class="text-gray-700 text-base mb-4">
            Raw wildflower honey from organic blossoms and wild honeybees offers
            incredible health benefits.
          </p>

          <div class="flex items-center">
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <ZeroStar />

            <p class="ml-2 text-sm font-medium text-gray-600">4.0 / 5</p>
          </div>

          <div class="flex items-center justify-between mt-1.5">
            <span class="text-[22px] font-bold text-gray-900">Rs. 329.00</span>
            <button
              type="button"
              class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div class="rounded-lg shadow-lg bg-stone-200 max-w-sm transform transition duration-500 hover:scale-105">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img
            class="rounded-t-lg w-[600px] h-[350px] p-4"
            src="https://honey.am/honey/wp-content/uploads/2017/03/honey_am-17-3.jpg"
            alt=""
          />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl mb-2 font-semibold">
            Himalayan Honey
          </h5>
          <p class="text-gray-700 text-base mb-4">
            The mystical delicacy of raw and exotic honey comes through a
            death-defying honey hunting. Pure Himalayan Honey for you.
          </p>

          <div class="flex items-center">
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <ZeroStar />

            <p class="ml-2 text-sm font-medium text-gray-600">4.2 / 5</p>
          </div>

          <div class="flex items-center justify-between mt-1.5">
            <span class="text-[22px] font-bold text-gray-900">Rs. 450.00</span>
            <button
              type="button"
              class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Products;
