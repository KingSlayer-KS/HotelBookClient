import React, { Component } from 'react';
import classes from './AboutUs.module.css';


class Education extends Component {
    render() {
        return (
          <div className={classes.box} id="education">

              <span className={classes.head}></span>
              <section className={classes.container}>
                <div className={classes.container_content}>
                  <div className={classes.row}>
                    <div className={classes.row_md_12}>
                      <div className={classes.timeline_centered}>
  
                          <article className={classes.timeline_entry}>
                            <div
                              className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}
                            >

                            </div>
                            <div className={classes.label}>
                              <h2>Our Mission Statement</h2>
                              <p>
                                The world is changing all around us. To continue
                                to thrive as a business over the next ten years
                                and beyond, we must look ahead, understand the
                                trends and forces that will shape our business
                                in the future and move swiftly to prepare for
                                what’s to come. We must get ready for tomorrow
                                today. That’s what our 2020 Vision is all about.
                                It creates a long-term destination for our
                                business and provides us with a “Roadmap” for
                                winning together with our partners.
                              </p>
                            </div>
                          </article>

                          <article className={classes.timeline_entry}>
                            <div className={classes.timeline_icon}>

                            </div>
                            <div className={classes.label}>
                              <h2>Our Mission</h2>
                              <p>
                                Our Roadmap starts with our mission, which is
                                enduring. It declares our purpose as a company
                                and serves as the standard against which we
                                weigh our actions and decisions. <br /> To bring
                                families closer together… <br /> To inspire
                                moments of optimism and happiness… <br /> To
                                create value and make a difference.
                              </p>
                            </div>
                          </article>

                          <article>
                            <div
                              className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}
                            >
                              
                            </div>
                            <div className={classes.label}>
                              <h2>Our Vision</h2>
                              <p style={{ whiteSpace: "pre-line" }}>
                                Our vision serves as the framework for our
                                Roadmap and guides every aspect of our business
                                by describing what we need to accomplish in
                                order to continue achieving sustainable, quality
                                growth. <br /> People: Be a great place to work
                                where people are inspired to be the best they
                                can be. <br />
                                Portfolio: Bring to the world a portfolio of
                                quality holidays that anticipate and satisfy
                                people’s desires and needs. <br /> Partners:
                                Nurture a winning network of customers and
                                partners, together we create mutual, enduring
                                value. <br />
                                Planet: Be a responsible citizen that makes a
                                difference by helping families and friends come
                                closer together. <br /> Profit: Maximize
                                long-term return to employees while being
                                mindful of our overall responsibilities. <br />{" "}
                                Productivity: Be a highly effective, lean and
                                fast-moving organization.
                              </p>
                            </div>
                            <div className={classes.timeline_entry_inner}>
                              <div
                                className={
                                  classes.timeline_icon_3 || classes.color_none
                                }
                              ></div>
                            </div>
                          </article>

                          <article className={classes.timeline_entry}>
                            <div className={classes.timeline_icon}>
                             
                            </div>
                            <div className={classes.label}>
                              <h2>Live Our Values</h2>
                              <p>
                                Our values serve as a compass for our actions
                                and describe how we behave in the world. <br />
                                Leadership: The courage to shape a better future{" "}
                                <br />
                                Collaboration: Leverage collective genius <br />
                                Integrity: Be real <br /> Accountability: If it
                                is to be, it’s up to me <br /> Passion:
                                Committed in heart and mind <br /> Diversity: As
                                inclusive as our brand <br />
                                Quality: What we do, we do well
                              </p>
                            </div>
                          </article>

                          <article className={classes.timeline_entry}>
                            <div className={classes.timeline_icon}>
                             
                            </div>
                            <div className={classes.label}>
                              <h2>Focus On The Market</h2>
                              <p>
                                Focus on needs of our consumers, customers and
                                franchise partners. <br /> Get out into the market and
                                listen, observe and learn. <br /> Possess a world view.<br />
                                Focus on execution in the marketplace every day. <br />
                                Be insatiably curious
                              </p>
                            </div>
                          </article>
                          <article className={classes.timeline_entry}>
                            <div className={classes.timeline_icon}>
                              
                            </div>
                            <div className={classes.label}>
                              <h2>Work Smart</h2>
                              <p>
                                Act with urgency. <br /> Remain responsive to change. <br />
                                Have the courage to change course when needed.<br />
                                Remain constructively discontent. <br /> Work
                                efficiently
                              </p>
                            </div>
                          </article>
                          <article className={classes.timeline_entry}>
                            <div className={classes.timeline_icon}>
    
                            </div>
                            <div className={classes.label}>
                              <h2>Act Like Owners</h2>
                              <p>
                                Be accountable for our actions and inactions. <br />
                                Steward system assets and focus on building
                                value. <br /> Reward our people for taking risks and
                                finding better ways to solve problems. <br /> Learn from
                                our outcomes — what worked and what didn’t
                              </p>
                            </div>
                          </article>
                    

                          <article className={classes.timeline_entry}>
                            <div
                              className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}
                            >
                             
                            </div>
                            <div className={classes.label}>
                              <h2>Our Winning Culture</h2>
                              <p>
                                Our Winning Culture defines the attitudes and
                                behaviours that will be required of us to make
                                our 2020 Vision a reality.
                              </p>
                            </div>
                          </article>

                      </div>
                    </div>
                  </div>
                </div>
              </section>

          </div>
        );
    }
}

export default Education;
