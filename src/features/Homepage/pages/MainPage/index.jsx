import React from "react";
import SidebarMenu from "../../../../common/ClientLayout/SidebarMenu";
import Slider from "../../../../common/ClientLayout/Slider";
import TitleSection from "../../../../common/TitleSection";
import PageSection from "../../components/PageSection";
import ProductBox from "../../components/ProductStyleAA";
import ShockSale from "../../components/ShockSale";
import { formatPrice } from "../../../../services/function";
import "./MainPage.scss";
import ProductStyleAA from "../../components/ProductStyleAA";
import ProductStyleBB from "../../components/ProductStyleBB";
import ProductSlider from "../../components/ProductSlider";
import Sumary from "../../components/Sumary";

MainPage.propTypes = {};

function MainPage(props) {
  return (
    <div className="page-content">
      {/* Menu - Slider */}
      <PageSection className="page-section-inner sidebarMenu-slider">
        <SidebarMenu />
        <Slider />
      </PageSection>
      {/* Section 1 */}
      <PageSection className="page-section-inner page-section-1">
        <TitleSection
          className="page-section-title"
          more="See all Deals"
          title="Today deals"
          textTransform="uppercase"
        />
        <div className="items-wrapper">
          <div className="items-section-1">
            <ShockSale />
          </div>
          <div className="items-section-2">
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
          </div>
        </div>
        <div className="button-link">
          <a href="#.">
            See All Deals <i className="zmdi zmdi-caret-right"></i>
          </a>
        </div>
      </PageSection>
      {/* Section 2 */}
      <PageSection className="page-section-inner page-section-2 grey-background">
        <div className="sign-in">
          <TitleSection
            title="Signin for the best experience"
            textTransform="uppercase"
            size="2rem"
            fontWeight="600"
          />
          <div className="sign-in__button">
            <a href="#.">
              Sign in <i className="zmdi zmdi-caret-right"></i>
            </a>
          </div>
          <div className="sign-in__sign-up">
            <p>
              New to Newegg?{" "}
              <a href="#.">
                Sign up <i className="zmdi zmdi-caret-right"></i>
              </a>
            </p>
          </div>
        </div>
        <div className="recent-view">
          <TitleSection
            title="Recent viewed item"
            more="See All"
            textTransform="uppercase"
            size="2rem"
            fontWeight="600"
          />
          <div className="recent-view__content">
            <div>
              <img src="/assets/images/recent-view.jpg" alt="recent-view" />
            </div>
            <div>
              <p className="title">
                Milk Thistle Liver Health Supplement | Easy Full Body Detox Pill
                |With Zinc
              </p>
              <p className="price">{formatPrice(3000000)}</p>
            </div>
          </div>
        </div>
        <div className="today-deal-1">
          <TitleSection
            title="Today's Deal"
            more="See all deals"
            textTransform="uppercase"
            size="2rem"
            fontWeight="600"
          />
          <div className="today-deal-1__content">
            <div>
              <img src="/assets/images/recent-view.jpg" alt="today-deal" />
            </div>
            <div>
              <p className="title">
                Milk Thistle Liver Health Supplement | Easy Full Body Detox Pill
                |With Zinc
              </p>
              <p className="price">{formatPrice(3000000)}</p>
            </div>
          </div>
        </div>
        <div className="today-deal-2">
          <TitleSection
            title="Today's Deal"
            textTransform="uppercase"
            size="2rem"
            fontWeight="600"
          />
          <div className="today-deal-2__content">
            <div>
              <img src="/assets/images/recent-view.jpg" alt="recent-view" />
            </div>
            <div>
              <p className="title">
                Milk Thistle Liver Health Supplement | Easy Full Body Detox Pill
                |With Zinc
              </p>
              <p className="price">{formatPrice(3000000)}</p>
            </div>
          </div>
        </div>
        <div className="categories">
          <TitleSection
            title="Categories may be you like"
            textTransform="uppercase"
            size="2rem"
            fontWeight="600"
          />
          <div className="categories__content">
            <div>
              <a href="#.">
                <img src="/assets/images/cpu.jpg" alt="cpu" />
              </a>
              <p>Processors - Desktop</p>
            </div>
            <div>
              <a href="#.">
                <img src="/assets/images/mainboard.jpg" alt="mainboard" />
              </a>
              <p>Intel Motherboards</p>
            </div>
          </div>
        </div>
        <div className="products">
          <TitleSection
            title="Products you may be interested in"
            textTransform="uppercase"
            more="See more"
            size="2rem"
            fontWeight="600"
          />
          <div>
            <a href="#.">
              <img src="/assets/images/mainboard.jpg" alt="mainboard" />
            </a>
            <a href="#.">
              <img src="/assets/images/mainboard.jpg" alt="mainboard" />
            </a>
            <a href="#.">
              <img src="/assets/images/mainboard.jpg" alt="mainboard" />
            </a>
            <a href="#.">
              <img src="/assets/images/mainboard.jpg" alt="mainboard" />
            </a>
            <a href="#.">
              <img src="/assets/images/mainboard.jpg" alt="mainboard" />
            </a>
            <a href="#.">
              <img src="/assets/images/mainboard.jpg" alt="mainboard" />
            </a>
            <a href="#.">
              <img src="/assets/images/mainboard.jpg" alt="mainboard" />
            </a>
            <a href="#.">
              <img src="/assets/images/mainboard.jpg" alt="mainboard" />
            </a>
            <a href="#.">
              <img src="/assets/images/mainboard.jpg" alt="mainboard" />
            </a>
          </div>
        </div>
      </PageSection>

      {/* Section 3 */}
      <PageSection className="page-section-inner spotlight page-section-3 grey-background">
        <TitleSection
          className="page-section-title"
          title="Spotlight: Staff Picks"
          more="See all Deals"
          textTransform="uppercase"
        />
        <div className="spotlight__content">
          <ProductStyleAA />
          <ProductStyleAA />
          <ProductStyleAA />
        </div>
      </PageSection>

      {/* Section 4 */}
      <PageSection className="page-section-inner  page-section-4 ">
        <div className="page-section-4__content">
          <div className="page-section-4__content_left">
            <div>
              <ProductSlider
                amount="4"
                title="CUSTOMERS ALSO BROWSED"
                more="See more"
              />
            </div>
            <div>
              <ProductSlider amount="4" title="Trending Now" />
            </div>
          </div>
          <div className="page-section-4__content_right">
            <div className="page-section-4__content_right_block">
              <img src="/assets/images/homepage_right.jpg" alt="block-ads" />
            </div>
            <div className="page-section-4__content_right_block">
              <img src="/assets/images/homepage_right-2.jpg" alt="block-ads" />
            </div>
            <div className="page-section-4__content_right_block">
              <img src="/assets/images/homepage_right-3.jpg" alt="block-ads" />
            </div>
          </div>
        </div>
      </PageSection>

      {/* Section 5 */}
      <PageSection className="page-section-inner page-section-5 grey-background">
        <div className="page-section-5__content">
          <div className="page-section-5__content_left">
            <div>
              <ProductSlider
                amount="4"
                title="Trending Now"
                hasShipping={false}
                hasAddToCart={false}
              />
            </div>
            <div>
              <Sumary />
            </div>
          </div>
          <div className="page-section-5__content_right">
            <div className="page-section-5__content_right_block branding_cc">
              <img src="/assets/images/branding_cc.png" alt="block-right" />
              <p>
                Up to 12 Months special financing every day, every purchase.
              </p>
              <a href="#.">
                Learn more <i className="zmdi zmdi-caret-right"></i>
              </a>
            </div>

            <div className="page-section-5__content_right_block brands">
              <p>Featured Brands</p>
              <div>
                <a href="#.">
                  <img src="/assets/images/brand-1.gif" alt="block-right" />
                </a>
                <a href="#.">
                  <img src="/assets/images/brand-3.gif" alt="block-right" />
                </a>
                <a href="#.">
                  <img src="/assets/images/brand-2.gif" alt="block-right" />
                </a>
                <a href="#.">
                  <img src="/assets/images/brand-1.gif" alt="block-right" />
                </a>
                <a href="#.">
                  <img src="/assets/images/brand-2.gif" alt="block-right" />
                </a>
                <a href="#.">
                  <img src="/assets/images/brand-3.gif" alt="block-right" />
                </a>
              </div>
            </div>

            <div className="page-section-5__content_right_block popular-products">
              <p>Popular products</p>
              <div>
                <a href="#." className="size-22">
                  i7 6700k
                </a>
                <a href="#." className="size-16">
                  i7 6700k
                </a>
                <a href="#." className="size-11">
                  i7 6700k
                </a>
                <a href="#." className="size-16">
                  CPUs
                </a>
                <a href="#." className="size-22">
                  i7 6700k
                </a>
                <a href="#." className="size-16">
                  i7 6700k
                </a>
                <a href="#." className="size-11">
                  i7 6700k
                </a>
                <a href="#." className="size-16">
                  CPUs
                </a>
              </div>
            </div>

            {/* Advertisement */}
            <div className="page-section-5__content_right_block advertisement">
              <img src="/assets/images/advertisement.jpg" alt="block-right" />
            </div>
          </div>
        </div>
      </PageSection>

      {/* Section 6 */}
      <PageSection className="page-section-inner page-section-6 recently-viewed-items">
        <TitleSection title="Recently viewed items" textTransform="uppercase" />
        <div className="recently-viewed-items__content">
          <ProductSlider
            amount="5"
            hasBrand={false}
            hasPrice={false}
            hasShipping={false}
            hasAddToCart={false}
          />
        </div>
      </PageSection>
    </div>
  );
}

export default MainPage;
