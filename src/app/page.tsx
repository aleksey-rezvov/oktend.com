export default function Home() {
  return (
    <>
      {/* Start Preloader */}
      <div className="preloader-area">
        <div className="preloader-wrapper">
          <div className="spinner"></div>
        </div>
      </div>
      {/* End Preloader */}

      {/* Start Main Wrapper */}
      <div className="main-wrapper">
        {/* Start Header Section */}
        <header>
          <div id="sticky-header" className="header-area header-style-one gray-bg">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-3">
                  <div className="logo">
                    <a href="/">
                      <h2><span>OK</span>TEND</h2>
                    </a>
                  </div>
                </div>
                <div className="col-md-9 col-sm-9 main-menu-wrapper">
                  <div className="main-menu-wrapper">
                    <button className="hamburger hamburger--slider" type="button">
                      <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                      </span>
                    </button>
                    <div className="homepage-menu-style-two mobile-menu">
                      <ul className="main-menu">
                        <li className="active"><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#portfolio">Projects</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#technologies">Technologies</a></li>
                        <li><a href="#principles">Principles</a></li>
                        <li><a href="#price">Pricing</a></li>
                        <li><a href="#contact">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Start Mobile Menu */}
                <div className="mobile-menu-area">
                  <div className="mobile-menu">
                    <ul>
                      <li className="active"><a href="#home">Home</a></li>
                      <li><a href="#about">About Us</a></li>
                      <li><a href="#portfolio">Projects</a></li>
                      <li><a href="#team">Team</a></li>
                      <li><a href="#technologies">Technologies</a></li>
                      <li><a href="#principles">Principles</a></li>
                      <li><a href="#price">Pricing</a></li>
                      <li><a href="#contact">Contact</a></li>
                    </ul>
                  </div>
                </div>
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </header>
        {/* End Header Section */}

        {/* Start Slider Area */}
        <div id="home" className="slider-area bg-9 bg-piter bg-opacity-black-40 homepage-style-five" data-stellar-background-ratio="0.5">
          <div className="slider-main-wrapper-three">
            <div className="container">
              <div className="row">
                <div className="slider-item">
                  <h2 className="intro-title">Hi, we are OKTEND</h2>
                  <h1 className="cd-headline clip is-full-width">
                    <span>we</span>
                    <span className="cd-words-wrapper">
                      <b className="is-visible">develop web applications</b>
                      <b>design system architecture</b>
                      <b>define functional requirements</b>
                      <b>conduct performance testing</b>
                      <b>write user documentation</b>
                      <b>create test plans</b>
                      <b>build project roadmaps</b>
                      <b>automate deployment pipelines</b>
                      <b>review code</b>
                      <b>develop automated tests</b>
                      <b>create UML diagrams</b>
                      <b>design APIs</b>
                      <b>craft user interfaces</b>
                      <b>run release demos</b>
                      <b>scale database clusters</b>
                      <b>estimate projects</b>
                      <b>document technical requirements</b>
                      <b>align designs with clients</b>
                      <b>refactor modules</b>
                      <b>develop mobile applications</b>
                      <b>create moodboards</b>
                      <b>visit clients on-site</b>
                      <b>hold daily standups</b>
                      <b>assess project risks</b>
                      <b>prepare analytical reports</b>
                      <b>fix bugs</b>
                      <b>interview candidates</b>
                      <b>listen carefully to our clients</b>
                      <b>run regression tests</b>
                      <b>design mobile app interfaces</b>
                      <b>meet deadlines</b>
                      <b>research new technologies</b>
                      <b>write unit tests</b>
                      <b>support users</b>
                      <b>conduct sprint retrospectives</b>
                      <b>define non-functional requirements</b>
                      <b>adopt new methodologies in practice</b>
                      <b>manage requirements</b>
                      <b>mentor developers</b>
                      <b>communicate our perspective to clients</b>
                      <b>perform stress tests</b>
                    </span>
                  </h1>
                  <h2>Quality Development — Your Way!</h2>
                  <p className="slider-content-p">We develop your web, mobile, or desktop applications.</p>
                  <p className="slider-content-p">We can help you define your application requirements, suggest design solutions, develop documentation, test, deploy to production, and support your system and users.</p>
                  <p className="slider-content-p">Simply put, if you have an idea, we will turn it into a working product.</p>
                  <p className="slider-content-p">The phrase &quot;Your Way&quot; is intentional — we offer <a className="slider-content-a" href="#price">several development options with different pricing</a>.</p>
                  <div className="slider-btn">
                    <a className="button active" href="#about">Why Choose Us?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area */}

        {/* Start Main Content Wrapper */}
        <div className="main-content-wrapper">
          <div id="about" className="content-section-area ptb-100">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2"></div>
                <div className="row">
                  <div className="col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2">
                    <div className="main-heading-content text-center">
                      <h2>OKTEND — Quality Development <span>Your Way!</span></h2>
                    </div>
                  </div>
                  
                  <div className="wow text-center fadeInLeft col-md-3 col-sm-3 animated" data-wow-delay="0.6s">
                    <i className="fa fa-group"></i>
                    <h3><a href="#team">Team</a></h3>
                    <p className="min-height-p">We are a <a href="#team">tightly-knit development team</a> where everyone knows each other well and understands who they can rely on. Our team of under 30 people is enough to deliver <a href="#portfolio">impactful projects</a>. We realistically assess our capabilities and never take on more projects than we can handle.</p>
                    <p><a className="button active" href="#team">Learn More</a></p>
                  </div>
                  
                  <div className="wow text-center fadeInLeft col-md-3 col-sm-3 animated" data-wow-delay="0.6s">
                    <i className="fa fa fa-code"></i>
                    <h3><a href="#principles">Principles</a></h3>
                    <p className="min-height-p">We have developed a set of principles for our work and openly share them, so you can assess whether we would be a good fit for your project.</p>
                    <p><a className="button active" href="#principles">Learn More</a></p>
                  </div>
                  
                  <div className="wow text-center fadeInRight col-md-3 col-sm-3 animated" data-wow-delay="0.6s">
                    <i className="fa fa-handshake-o"></i>
                    <h3><a href="#price">Pricing</a></h3>
                    <p className="min-height-p">We offer several development options to our clients to optimize time or cost, while always maintaining our commitment to quality.</p>
                    <p><a className="button active" href="#price">Learn More</a></p>
                  </div>
                  
                  <div className="wow text-center fadeInRight col-md-3 col-sm-3 animated" data-wow-delay="0.6s">
                    <i className="fa fa-thumbs-o-up"></i>
                    <h3><a href="#technologies">Technologies</a></h3>
                    <p className="min-height-p">We work with multiple popular technology stacks to develop web, mobile, and desktop applications. These include both open-source solutions and established vendor technologies.</p>
                    <a className="button active" href="#technologies">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Start About Skill Area */}
          <div id="portfolio" className="about-skill-section clearfix black-bg">
            <div className="about-text-wrapper">
              <div className="progress-bar-wrapper">
                <h2>Project <span>Distribution</span></h2>
                
                <div className="single-experience">
                  <p>Business automation (CRM, inventory management, pricing, workflows, etc.)</p>
                  <div className="progress">
                    <div className="progress-bar wow fadeInLeft progress-animation-40 animated" data-wow-duration=".7s" data-wow-delay=".7s" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
                      <span>40%</span>
                    </div>
                  </div>
                </div>
                
                <div className="single-experience">
                  <p>E-commerce (online stores, catalogs, etc.)</p>
                  <div className="progress">
                    <div className="progress-bar wow fadeInLeft progress-animation-20 animated" data-wow-duration=".6s" data-wow-delay=".6s" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                      <span>20%</span>
                    </div>
                  </div>
                </div>
                
                <div className="single-experience">
                  <p>Financial technology (stock exchanges, blockchain, etc.)</p>
                  <div className="progress">
                    <div className="progress-bar wow fadeInLeft progress-animation-10 animated" data-wow-duration="0.5s" data-wow-delay=".5s" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                      <span>10%</span>
                    </div>
                  </div>
                </div>
                
                <div className="single-experience">
                  <p>Internet services (aggregators, scrapers, notification systems, analyzers, etc.)</p>
                  <div className="progress">
                    <div className="progress-bar wow fadeInLeft progress-animation-10 animated" data-wow-duration=".6s" data-wow-delay=".6s" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                      <span>10%</span>
                    </div>
                  </div>
                </div>
                
                <div className="single-experience">
                  <p>Geographic information systems (employee tracking, fleet management, order routing, etc.)</p>
                  <div className="progress">
                    <div className="progress-bar wow fadeInLeft progress-animation-5 animated" data-wow-duration="0.5s" data-wow-delay=".5s" role="progressbar" aria-valuenow={5} aria-valuemin={0} aria-valuemax={100}>
                      <span>5%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="about-content" data-stellar-background-ratio="0.9">
                <h2 className="cd-headline clip is-full-width">
                  <span>our</span>
                  <span className="cd-words-wrapper">
                    <b className="is-visible">projects</b>
                    <b>products</b>
                    <b>research</b>
                  </span>
                </h2>
                <p>Our team has successfully delivered dozens of joint projects. We are happy to share relevant case studies upon request, selecting those most applicable to your needs.</p>
                <p>A typical project for us is a <strong>web application</strong> with a <strong>server component (backend)</strong>, <strong>web interface (frontend)</strong>, <strong>mobile apps</strong>, and in some cases <strong>desktop applications</strong>.</p>
                <p>We have implemented numerous <strong>integrations with third-party services</strong>, including <strong>government information systems</strong>.</p>
                <p>We have built systems using both <strong>monolithic</strong> and <strong>microservice architectures</strong>, so we can advise on the best approach for your project.</p>
                <p>We have extensive experience ensuring <strong>high availability</strong>, <strong>optimizing performance</strong>, and <strong>processing large datasets</strong> (including data preprocessing).</p>
              </div>
            </div>
          </div>
          {/* End About Skill Area */}

          {/* Start Team Area */}
          <div id="team" className="content-section-area ptb-100">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2">
                  <div className="main-heading-content text-center">
                    <h2>Our <span>Team</span></h2>
                    <p>Our team members have all the specializations needed to take your project from idea to ongoing support.</p>
                    <p>Beyond delivering project work according to established criteria, we prioritize continuous learning — staying current with technologies, methodologies, and tools while training new specialists. Our straightforward league-based system, organized by competency level, helps allocate roles in these processes.</p>
                  </div>
                </div>
                
                <div className="col-md-12">
                  <div className="col-md-6">
                    <div className="flip-container">
                      <div id="card" className="flipper">
                        <div className="front">
                          <div className="face front">
                            <div className="card-up">
                              <img className="image-vertical-aling" src="/img/oldleague.jpg" alt="Senior League" />
                            </div>
                            <div className="content">
                              <div className="main-heading-content margin-bottom-0">
                                <h2>Senior <span>League</span></h2>
                              </div>
                              <hr />
                              <p>Every senior league member is an expert, fully capable of independently handling their area of responsibility.</p>
                              <a className="link-text"><h5>Learn More <i className="fa fa-chevron-right"></i></h5></a>
                            </div>
                          </div>
                        </div>
                        <div className="back">
                          <div className="content">
                            <h2>Senior League</h2>
                            <p>Senior league members are professionals who can independently execute any task in their field or coordinate team execution.</p>
                            <p>The senior league forms the backbone of all projects. For commercial projects, they typically lead. On critical projects, teams may consist exclusively of senior league members.</p>
                            <p>In internal initiatives, senior league members serve as mentors and champions of new technologies and approaches.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="flip-container-2">
                      <div id="card2" className="flipper">
                        <div className="front">
                          <div className="face front">
                            <div className="card-up">
                              <img className="image-vertical-aling" src="/img/teenleague.jpg" alt="Junior League" />
                            </div>
                            <div className="content">
                              <div className="main-heading-content margin-bottom-0">
                                <h2>Junior <span>League</span></h2>
                              </div>
                              <hr />
                              <p>Well-trained professionals who are still building experience to independently solve complex problems.</p>
                              <a className="link-text"><h5>Learn More <i className="fa fa-chevron-right"></i></h5></a>
                            </div>
                          </div>
                        </div>
                        <div className="back">
                          <div className="content">
                            <h2>Junior League</h2>
                            <p>Junior league members are well-trained professionals who are still developing the experience needed to independently solve complex problems.</p>
                            <p>Most employees join the junior league through our internship programs, where we assess their problem-solving abilities and interpersonal skills. Theoretical knowledge is tested before admission, while practical application is evaluated during the internship.</p>
                            <p>Junior league members primarily work on internal products but may join commercial projects to reduce costs. Regardless, senior league members supervise all projects to ensure quality standards are met.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Team Area */}

          {/* Start Counter Section */}
          <div id="technologies" className="stats-area text-center bg-5 bg-opacity-black-70 clearfix">
            <div className="main-heading-content text-center">
              <h2 className="white-text">Our <span>Technologies</span></h2>
            </div>
            
            <div className="single-stats-item">
              <div className="stats-item-heading">
                <i className="ti-settings"></i>
                <h4>BACKEND</h4>
              </div>
              <div className="span-list">
                <span className="tags-span">Python</span>
                <span className="tags-span">Django</span>
                <span className="tags-span">Flask</span>
                <span className="tags-span">Kafka</span>
                <span className="tags-span">C#</span>
                <span className="tags-span">.NET Core</span>
                <br />
                <span className="tags-span">Java</span>
                <span className="tags-span">Spring</span>
              </div>
            </div>
            
            <div className="single-stats-item">
              <div className="stats-item-heading">
                <i className="ti-layers"></i>
                <h4>DATABASES</h4>
              </div>
              <div className="span-list">
                <span className="tags-span">PostgreSQL</span>
                <span className="tags-span">MongoDB</span>
                <span className="tags-span">MSSQL</span>
                <span className="tags-span">OracleDB</span>
                <span className="tags-span">MySQL</span>
                <span className="tags-span">Redis</span>
                <span className="tags-span">Cassandra</span>
                <span className="tags-span">ElasticSearch</span>
                <span className="tags-span">Neo4j</span>
                <span className="tags-span">OrientDB</span>
              </div>
            </div>
            
            <div className="single-stats-item">
              <div className="stats-item-heading">
                <i className="ti-tablet"></i>
                <h4>FRONTEND</h4>
              </div>
              <div className="span-list">
                <span className="tags-span">JavaScript</span>
                <span className="tags-span">TypeScript</span>
                <span className="tags-span">React</span>
                <span className="tags-span">Angular</span>
                <span className="tags-span">Gulp</span>
                <span className="tags-span">Bower</span>
                <span className="tags-span">SASS</span>
                <span className="tags-span">Bootstrap</span>
                <span className="tags-span">Less</span>
              </div>
            </div>
            
            <div className="single-stats-item">
              <div className="stats-item-heading">
                <i className="ti-mobile"></i>
                <h4>MOBILE</h4>
              </div>
              <div className="span-list">
                <span className="tags-span">Java</span>
                <span className="tags-span">Objective-C</span>
                <span className="tags-span">Swift</span>
                <span className="tags-span">C#</span>
                <span className="tags-span">Cordova</span>
                <span className="tags-span">React Native</span>
                <span className="tags-span">SMP</span>
                <span className="tags-span">IBM Mobile First</span>
              </div>
            </div>
            
            <div className="single-stats-item">
              <div className="stats-item-heading">
                <i className="ti-desktop"></i>
                <h4>DESKTOP</h4>
              </div>
              <div className="span-list">
                <span className="tags-span">C++</span>
                <span className="tags-span">Qt</span>
                <span className="tags-span">STL</span>
                <span className="tags-span">Boost</span>
              </div>
            </div>
            
            <div className="single-stats-item">
              <div className="stats-item-heading">
                <i className="ti-reload"></i>
                <h4>DEPLOY</h4>
              </div>
              <div className="span-list">
                <span className="tags-span">Ansible</span>
                <span className="tags-span">Docker</span>
                <span className="tags-span">Linux</span>
                <span className="tags-span">Windows</span>
                <span className="tags-span">IIS</span>
                <span className="tags-span">Jenkins</span>
                <span className="tags-span">Bash</span>
                <span className="tags-span">Nginx</span>
                <span className="tags-span">Consul</span>
                <span className="tags-span">ZooKeeper</span>
                <span className="tags-span">Zabbix</span>
              </div>
            </div>
            
            <div className="single-stats-item">
              <div className="stats-item-heading">
                <i className="ti-pencil-alt"></i>
                <h4>ANALYTICS</h4>
              </div>
              <div className="span-list">
                <span className="tags-span">UML</span>
                <span className="tags-span">BPMN</span>
                <span className="tags-span">Jira</span>
                <span className="tags-span">Confluence</span>
                <span className="tags-span">TFS</span>
                <span className="tags-span">Trello</span>
                <span className="tags-span">IDEF0</span>
                <span className="tags-span">GOST 34</span>
              </div>
            </div>
            
            <div className="single-stats-item">
              <div className="stats-item-heading">
                <i className="ti-check-box"></i>
                <h4>QA</h4>
              </div>
              <div className="span-list">
                <span className="tags-span">Selenium</span>
                <span className="tags-span">ISO 9001</span>
                <span className="tags-span">TestRail</span>
                <span className="tags-span">JMeter</span>
              </div>
            </div>
          </div>
          {/* End Counter Section */}

          {/* Start Services Section */}
          <div id="principles" className="content-section-area ptb-100">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2">
                  <div className="main-heading-content text-center">
                    <h2>Our <span>Principles</span></h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="service-wrapper">
                  <div className="service-item">
                    <div className="service-icon">
                      <i className="fa fa-paper-plane-o"></i>
                    </div>
                    <h3>Methodology Flexibility</h3>
                    <p>We work with Agile Scrum/Kanban, Waterfall, GOST 34, WaterScrumFall, and other methodologies. The choice depends on project duration, specifications, client preferences, team availability, and task characteristics. Different teams within the same project may use different methodologies.</p>
                  </div>
                  
                  <div className="service-item">
                    <div className="service-icon">
                      <i className="fa fa-comments-o"></i>
                    </div>
                    <h3>Transparent Problem Solving</h3>
                    <p>If something goes wrong, we report it immediately and suggest solutions. Regardless of where the problem originated, we identify it, document it, and resolve it. We expect clients to discuss challenges openly rather than staying silent.</p>
                  </div>
                  
                  <div className="service-item">
                    <div className="service-icon">
                      <i className="fa fa-user-circle-o"></i>
                    </div>
                    <h3>Pragmatic Approach</h3>
                    <p>We do not chase 100% test coverage just for the metric, though we will if there is a genuine requirement. We do not build REST APIs and SPAs just because it is trendy. We do not use Scrum on every project just to claim we are Agile.</p>
                  </div>
                  
                  <div className="service-item">
                    <div className="service-icon">
                      <i className="fa fa-handshake-o"></i>
                    </div>
                    <h3>Client Collaboration</h3>
                    <p>A client representative participates throughout development: reviewing milestone deliverables, clarifying requirements, and providing feedback. The level of involvement varies by project — some stages only require final acceptance, while others need weekly check-ins. Either way, expect to invest time in the process.</p>
                  </div>
                  
                  <div className="service-item">
                    <div className="service-icon">
                      <i className="fa fa-wrench"></i>
                    </div>
                    <h3>Balanced Innovation</h3>
                    <p>We follow emerging technologies closely but only adopt what we have validated in practice. To stay current without risking client projects, we test new tools on internal projects or on client work where the risks of using newer technology are acceptable.</p>
                  </div>
                  
                  <div className="service-item">
                    <div className="service-icon">
                      <i className="fa fa-pencil-square-o"></i>
                    </div>
                    <h3>Documented Requirements</h3>
                    <p>We always document software requirements. For small projects, this may be a simple concept description; for large ones, a comprehensive Confluence structure. We can help develop requirements if needed, but regardless, the requirements are always written down.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Services Section */}

          {/* Start Call to action Section */}
          <div className="call-to-action-section black-bg">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-8">
                  <div className="action-content">
                    <span>Get in touch,</span>
                    <h3>We will provide a project estimate <span className="action-title">within 24 hours</span></h3>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="action-btn">
                    <a href="mailto:info@oktend.com" className="button button-black">info@oktend.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Call to action Section */}

          {/* Start Pricing Table */}
          <div id="price">
            <h2 className="white-text">Our <span>Technologies</span></h2>
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2">
                  <div className="main-heading-content text-center margin-bottom-0">
                    <h2>Development <span>Pricing</span></h2>
                    <p>Our pricing approach ensures a consistent quality level sufficient for long-term project maintenance, with the final cost determined by the time-to-cost ratio. Quality here means not just the end-user experience, but also code maintainability, architectural clarity, security, infrastructure reliability, and documentation.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <ul className="ch-grid">
                    <li>
                      <div id="circle1" className="ch-item">
                        <div className="ch-info">
                          <div id="front1" className="ch-info-front ch-img-1">
                            <h3>Fast</h3>
                          </div>
                          <div id="back1" className="ch-info-back">
                            <h3>Fast</h3>
                            <p>By primarily engaging senior league specialists, we can deliver the project as quickly as possible given the risks, though the cost will be higher accordingly.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div id="circle2" className="ch-item">
                        <div className="ch-info">
                          <div id="front2" className="ch-info-front ch-img-2">
                            <h3>Quality</h3>
                          </div>
                          <div id="back2" className="ch-info-back">
                            <h3>Quality</h3>
                            <p id="p2">We always deliver quality work.</p>
                            <p>The question is: what matters more to you — speed or cost?</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div id="circle3" className="ch-item">
                        <div className="ch-info">
                          <div id="front3" className="ch-info-front ch-img-3">
                            <h3>Affordable</h3>
                          </div>
                          <div id="back3" className="ch-info-back">
                            <h3>Affordable</h3>
                            <p>We can reduce costs by involving junior league specialists, but since they need more time to achieve the required quality, the timeline will be longer.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Pricing Table */}

        {/* Start Footer Section */}
        <div className="clearfix"></div>
        <footer>
          <div className="footer-widget-area black-bg ptb-80">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="footer-widget-item">
                    <div className="logo footer-logo">
                      <a href="#">
                        <h2><span>OK</span>TEND</h2>
                      </a>
                    </div>
                    <ul id="contact" className="widget-address">
                      <li>
                        <a href="mailto:info@oktend.com">
                          <i className="fa fa-envelope m-5"></i> info@oktend.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="col-md-3 col-sm-6 col-md-offset-1">
                  <div className="footer-widget-item">
                    <ul className="widget-link">
                      <li><a href="#about">About Us</a></li>
                      <li><a href="#portfolio">Projects</a></li>
                      <li><a href="#team">Team</a></li>
                      <li><a href="#technologies">Technologies</a></li>
                      <li><a href="#principles">Principles</a></li>
                      <li><a href="#price">Pricing</a></li>
                    </ul>
                  </div>
                </div>
                
                <div className="col-md-5">
                  <div className="footer-widget-item">
                    <p className="footer-p">Write to <span className="footer-email"><a href="mailto:info@oktend.com">info@oktend.com</a></span>,<br />All emails are forwarded to management.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom text-center">
            <div className="container">
              <div className="row">
                <div className="copyright">
                  <p>Materials developed by the OKTEND team in 2017. When using, please credit <a href="https://www.oktend.com">www.oktend.com</a>. Thank you.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* End Footer Section */}
      </div>
      {/* End Main Wrapper */}
    </>
  )
}
