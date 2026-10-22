"use client";

import React from "react";
import Link from "next/link";
import { Locale } from "@/data/translations";

interface FooterProps {
  currentLocale?: Locale;
}

export default function Footer({ currentLocale = "en" }: FooterProps) {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="colophon" className="site-footer" role="contentinfo">
      <div className="site-footer-wrap">
        {/* Middle Footer: 4-Column Editorial Layout */}
        <div
          className="site-middle-footer-wrap site-footer-row-container site-footer-focus-item site-footer-row-layout-standard site-footer-row-tablet-layout-default site-footer-row-mobile-layout-default"
          data-section="kadence_customizer_footer_middle"
        >
          <div className="site-footer-row-container-inner">
            <div className="site-container">
              <div className="site-middle-footer-inner-wrap site-footer-row site-footer-row-columns-4 site-footer-row-column-layout-equal site-footer-row-tablet-column-layout-2-col site-footer-row-mobile-column-layout-row ft-ro-dir-row ft-ro-collapse-normal ft-ro-t-dir-default ft-ro-m-dir-default ft-ro-lstyle-plain">
                {/* Column 1: Brand */}
                <div className="site-footer-middle-section-1 site-footer-section footer-section-inner-items-1">
                  <div className="footer-widget-area widget-area site-footer-focus-item footer-widget1">
                    <div className="footer-widget-area-inner site-info-inner">
                      <section id="block-8" className="widget widget_block widget_custom_html">
                        <div className="footer__brand-col">
                          <Link href="/" className="footer__brand">
                            MUJERES <em>de arena</em>
                          </Link>
                        </div>
                      </section>
                      <section id="block-9" className="widget widget_block widget_text">
                        <p className="wp-block-paragraph">
                          A transformative journey through Morocco. 7 days among
                          vibrant cities, mountains, ancestral kasbahs and the
                          immensity of the Sahara. Reserved for 12 women.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>

                {/* Column 2: The Journey */}
                <div className="site-footer-middle-section-2 site-footer-section footer-section-inner-items-1">
                  <div className="footer-widget-area widget-area site-footer-focus-item footer-widget3">
                    <div className="footer-widget-area-inner site-info-inner">
                      <section id="nav_menu-2" className="widget widget_nav_menu">
                        <h2 className="widget-title">The Journey</h2>
                        <div className="menu-resources-container">
                          <ul id="menu-resources" className="menu">
                            <li className="menu-item">
                              <Link href="/itinerary">The 7 Stages</Link>
                            </li>
                            <li className="menu-item">
                              <Link href="/#sahara">The Sahara</Link>
                            </li>
                            <li className="menu-item">
                              <Link href="/itinerary#stays">Where we stay</Link>
                            </li>
                            <li className="menu-item">
                              <Link href="/itinerary#pricing">Inclusions &amp; Exclusions</Link>
                            </li>
                          </ul>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>

                {/* Column 3: Information */}
                <div className="site-footer-middle-section-3 site-footer-section footer-section-inner-items-1">
                  <div className="footer-widget-area widget-area site-footer-focus-item footer-widget4">
                    <div className="footer-widget-area-inner site-info-inner">
                      <section id="nav_menu-3" className="widget widget_nav_menu">
                        <h2 className="widget-title">Information</h2>
                        <div className="menu-trip-types-container">
                          <ul id="menu-trip-types" className="menu">
                            <li className="menu-item">
                              <Link href="/about">About Vanessa &amp; Ana</Link>
                            </li>
                            <li className="menu-item">
                              <Link href="/reserve-spot">Book my spot</Link>
                            </li>
                            <li className="menu-item">
                              <Link href="/contact">Contact us</Link>
                            </li>
                            <li className="menu-item">
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://instagram.com/"
                              >
                                Follow on Instagram
                              </a>
                            </li>
                          </ul>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>

                {/* Column 4: Support */}
                <div className="site-footer-middle-section-4 site-footer-section footer-section-inner-items-1">
                  <div className="footer-widget-area widget-area site-footer-focus-item footer-widget2">
                    <div className="footer-widget-area-inner site-info-inner">
                      <section id="nav_menu-1" className="widget widget_nav_menu">
                        <h2 className="widget-title">Support</h2>
                        <div className="menu-support-container">
                          <ul id="menu-support" className="menu">
                            <li className="menu-item">
                              <Link href="/#faq">Frequently Asked Questions (FAQ)</Link>
                            </li>
                            <li className="menu-item">
                              <Link href="/#practico">Before you go</Link>
                            </li>
                            <li className="menu-item">
                              <Link href="/terms">Terms of Service</Link>
                            </li>
                            <li className="menu-item">
                              <Link href="/privacy">Privacy Policy</Link>
                            </li>
                          </ul>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer: Copyright & Back to Top */}
        <div
          className="site-bottom-footer-wrap site-footer-row-container site-footer-focus-item site-footer-row-layout-standard site-footer-row-tablet-layout-default site-footer-row-mobile-layout-default"
          data-section="kadence_customizer_footer_bottom"
        >
          <div className="site-footer-row-container-inner">
            <div className="site-container">
              <div className="site-bottom-footer-inner-wrap site-footer-row site-footer-row-columns-1 site-footer-row-column-layout-row site-footer-row-tablet-column-layout-default site-footer-row-mobile-column-layout-row ft-ro-dir-row ft-ro-collapse-normal ft-ro-t-dir-default ft-ro-m-dir-default ft-ro-lstyle-plain">
                <div className="site-footer-bottom-section-1 site-footer-section footer-section-inner-items-1">
                  <div
                    className="footer-widget-area site-info site-footer-focus-item content-align-default content-tablet-align-default content-mobile-align-default content-valign-default content-tablet-valign-default content-mobile-valign-default"
                    data-section="kadence_customizer_footer_html"
                  >
                    <div className="footer-widget-area-inner site-info-inner">
                      <div className="footer-html inner-link-style-normal">
                        <div className="footer-html-inner">
                          <div className="footer__bottom">
                            <span>
                              © 2026 Mujeres de Arena · First edition (23 — 29
                              Sep 2026). All rights reserved.
                            </span>
                            <a
                              href="#masthead"
                              className="footer__top-link"
                              onClick={scrollToTop}
                            >
                              Back to top ↑
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
