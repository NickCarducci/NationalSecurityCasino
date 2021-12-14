import React from "react";
import Cable from "./Dropwire";
import TwitterTweetEmbed from "./TwitterTweetEmbed";
import { UAParser } from "ua-parser-js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      browser: name,
      scrollTop: 0,
      serviceCancelingImages: name.includes("Safari")
    };
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);
  };
  componentWillUnmount = () => {
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY;
      this.setState(
        {
          scrolling: true,
          scrollTop
        },
        () => {
          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.setState({
              scrolling: false
            });
          }, 900);
        }
      );
    }
  };
  refresh = (first) => {
    const width = this.state.ios ? window.screen.availWidth : window.innerWidth;
    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight
        });
      }, 600);
    }
  };
  render() {
    const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true });
      }
    };
    return (
      <div
        style={{
          fontFamily: "arial, sans serif",
          wordBreak: "break-word",
          textAlign: "left",
          width: "100%",
          maxWidth: "600px",
          position: "relative"
        }}
      >
        <div
          style={{
            width: "100%"
          }}
        >
          <a
            style={{
              shapeOutside: "rect()",
              float: "right",
              width: "max-content",
              padding: "0px 10px",
              //fontSize: "20px",
              fontFamily: "'Pacifico', sans-serif"
              //color: "rgb(230,230,255)"
              //backgroundColor: "rgb(32, 22, 11)"
            }}
            href="https://carducci.us"
          >
            Vote Truncated Sales Tax 2025 against Menendez - 3under2.us
          </a>
          "Socialism" isn't (S)aver since social isn't work deficit comparative
          advantage tech advancement, with labor as transitive-property to
          labor-borne-demand as to better our per hour price deflation, not bbb
          ccc ppp trust build existing-biz parents and contractors.
          <br />
          <br />
          <Cable
            style={{
              height: "580px",
              width: "400px",
              maxWidth: "100%",
              maxHeight: "80vw"
            }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1be6BxAkiuR08m28VRRqbEd4hTdbG3YjT/preview"
            }
            float="left"
            title="LinkedIn unprofessional and off topic label on relevant industry"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 8]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "she is mad as hell and cannot take it anymore just about,"
          <br />
          <br />
          implausible landlord use third arty beneficiary donee claimable free
          rider mutable&nbsp;<a href="https://qr.ae/pGqeJd">r&d monopsony</a>
          &nbsp;beyond article 4, provaxx, antimandate is impossible
          <a
            style={{
              shapeOutside: "rect()",
              float: "right",
              width: "max-content",
              padding: "0px 10px",
              //fontSize: "20px",
              fontFamily: "'Pacifico', sans-serif"
              //color: "rgb(230,230,255)"
              //backgroundColor: "rgb(32, 22, 11)"
            }}
            href="https://30under5.us"
          >
            30under5.us
          </a>
          <h2>
            <span
              style={{
                fontSize: "9px"
              }}
            >
              conservative in productivity (price-deflation-per-hour),
              jury-desistation-lest-paid-user/-duress-mvp/-conviction, any
              multiple of 12 with cause for removal by invariance of industry
            </span>
            <br />
            Trump is King Debt, libertarians are hypocrites
            <br />
          </h2>
          <Cable
            style={{ height: "440px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/115LRY-YBUQIgPXkrzfn5khohBrLENqJt/preview"
            }
            float="right"
            title="White House Press Briefing (Daily Wire) - Russia in Crimea, Taliban in Crimea"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 7]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <span style={{ lineHeight: "12px", fontSize: "9px" }}>
            Competing with consumers loitering lender work deficit third a party
            beneficiary donee claimable
            <br />
            Politics is reasoning, net loss bond profit is racketeering,
            political parties are ideological duress, non-voters keep
            winning&nbsp;
            <span role="img" aria-label="gold-medal">
              🥇
            </span>
            !
            <br />
            <br />
            Open-source licensure save the animals release the meds, non-expiry
            claimables aren’t mechanic nor doctor hours, third party beneficiary
            donee claimables and
            <br />
            replace the third party beneficiary donee claimables with truncated
            sales tax and max-profit royalties (1-level-board)
            <br />
            1-level board max profit royalty
            <br />
            Corporate profit vs corporate profit <br />
            Corporate profit vs r&d monopsony
            <br />
            Corporate profit vs competing with consumers
            <br />
            <br />
            Politics is reasoning, net loss bond profit is racketeering,
            political parties are ideological duress, non-voters keep
            winning&nbsp;
            <span role="img" aria-label="gold-medal">
              🥇
            </span>
            !
            <br />
            1-level board max profit royalty
            <br />
            If blue can scoot you can too
            <br />
            “G-d bless you,” “Thank you.”
            <br />
            “At our expense most probably,” especially if you regard such as it
            is when tax from outside the market is pure inflation and
            comparative advantage list of cheating past consumers
          </span>
        </div>
        <br />
        “Everything you need to get healthy and stay healthy,” getcoverednj.com
        <br />
        “Make sure it is the votes and the voices of jan 6, not a cabal for
        their own quest for power,” Congresswoman stone auserman with Jake
        tapper
        <br />
        <br />
        Republicans are nationalizing broadband network fees and bridge tolls
        <br />
        “Lock in mortgage that can save $1k/mo, a custom loan around your means
        and budget.” Mark Levin on AmericanFinancing.net. It doesn’t save money,
        and it is loitering third party beneficiary donee claimable.
        <br />
        <Cable
          onError={handleScollImgError}
          //img={true}
          src={
            this.state.serviceCancelingImages
              ? ""
              : "https://drive.google.com/file/d/1OTrBvBNR83tVn5LM-7UDBMiPl0pr62R8/preview"
          }
          float="left"
          title={`Spicer & co (Newsmax) - Trump on excess deaths age standardized 
          by cohort size less than expected, honor-system signature-matching, and
           truncated sales tax to ween off cops 3under2.us. Make good views up about 
           other people and see how they austere.`}
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 6]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “On policy, Trump and Putin are ahead most other people,” Bill O’Reilly
        <br />
        <br />
        Chaos, no social services, no cable , no no spin news,” just because it
        is monopoly doesn’t mean you have to nationalize network fees.
        <br />
        “You can sanction, boom, kill all the people, said in gentle, diplomatic
        terms.”
        <br />
        <br />
        "The covid came out of China,"
        <br />
        “We need profit for research and development[, why not have individual
        research outfits? collective bargain is only not a loss when
        immediate/ASAP], tort reform saved money from not having to spend on
        insurance,” Dr Peter Michalos.
        <br />
        <br />
        Prevalence does not transmission make, can be cause or byproduct, and if
        you think virus is cause of virus with just reproduction with cell, you
        must think it is an evolutionary trait to kill eachother. Or, it is just
        byproduct.
        <br />
        <br />
        It may “cost-less” when making government gentrification, rent seek by
        hiding expiring claim false bid pool premiums, but the lender work
        deficit and useless bid-to-ask free rider mutable inelasticity is
        surmountable in the wealth-loss (as opposed to monthly-deductible
        vacuum).
        <Cable
          style={{ height: "440px" }}
          onError={handleScollImgError}
          //img={true}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.youtube.com/embed/sbIoxEP41J8"
          }
          float="left"
          title="Dr Henderson Review Video Testimony & false mental-institution conviction, bizarre for non-rollover insurance whistleblower"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 5]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <Cable
          style={{ width: "400px", maxWidth: "100vw", height: "400px" }}
          onError={handleScollImgError}
          //img={true}
          src={
            this.state.serviceCancelingImages
              ? ""
              : "https://drive.google.com/file/d/1NGR6kw3SJvf-L64eVhCK9QVgP2YovMqD/preview"
          }
          float="left"
          title="Dr Henderson Review on Google, recinding of mental-illness claim online, apologizing for my 'knee appointment'"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 4]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <h2>
          <span
            style={{
              fontSize: "9px"
            }}
          >
            awaits consumers of settled bid without expiry or (option to buy or)
            estimated materials and labor,
          </span>
          <br />
          max profit royalty will&nbsp;<a href="https://vaults.biz">replace</a>
          &nbsp;all debt
        </h2>
        alternative finance (elsewhere known as&nbsp;
        <a href="https://pipe.com/blog/pipe-vs-loan#:~:text=You%E2%80%99ll%20pay%20back%20what%20you%20pulled%20forward,%20based%20on%20timing%20of%20your%20recurring%20revenue%20streams">
          recurring revenue
        </a>
        ) $300k/year/person $821/day/person new debt. If Trump says,
        "plandemic," for election, he has to for spending. Usual $4t/yr fed
        spend. How only $2t currencyComponentOfM1 checking
        park-deed-claimables/depositaries/rollover(non-expiry). Don't max profit
        royalty a la carte (in multi-level-boards, bank elsewise
        concurrentable-equities).
        <br />
        <br />
        Survey bias non-voters won, stay home on excess deaths age standardized
        less than expected cohort gains, honor-system-signature make magnetic
        data auditing, fraud. 1.2m/yr+ 75+ 2015- census mortality projections by
        census and I saw this coming
        <Cable
          style={{ width: "100%", maxWidth: "400px", height: "200px" }}
          onError={handleScollImgError}
          //img={true}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.youtube.com/embed/A2kSh0A8Ad0"
          }
          float="right"
          title="nj 101.5 steve trevalese nj voting ArrayArrays content-addressable anonymous way, public profile match population, and cors. Awaiting login.gov"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 3]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <br />
        <br />
        boycotting credit, implausible use rental-income by unit or days (30)
        and other forms of competing with consumers of end products without
        intelligence as commodity but public utility, design and discovery the
        domain of individuals, and nothing of the state by free rider mutable
        tax 60%, 40% debt-spending (ever increasing, 50% state) and 10-40%
        fed-state debt-service, closed-source-licensing, animal-testing and r&d
        monopsony. STAY AT HOME MOMS ARE SUCC, "get this guy nick off!"
        <h2>
          <span
            style={{
              fontSize: "9px"
            }}
          >
            repo-cycle kept-down-payments, implausible use intent, expiring
            claims & invoices donee claimable; 13d-retail anonymity disconnect.
          </span>
          <br />
          false bid pools and accrual is breaking third party beneficiary
          <br />
          <span
            style={{
              fontSize: "9px"
            }}
          >
            non-concurrentable nor rollover hours, schedules of outlays,
            loitering lest 1-level board of max-profit-royalty all bankable else
            equities, non-expiry.
          </span>
        </h2>
        <Cable
          style={{ width: "100%", maxWidth: "400px", height: "200px" }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.youtube.com/embed/Jxj0-TaTm4o"
          }
          float="left"
          title=""
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 2]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “It is going to come down to how much insurance there is,” grossly
        forlorn of not-surrendering the non-settle-ability of non-concurrentable
        premiums promised in all claims. Without that prisoners’ dilemma, there
        is not that capacity. In NJ, they will remove you from jury duty for
        being against insurance premium-non-concurrentable-fraud of those forced
        to pay into it as the insureds’ customers.
        <br />
        <br />
        <TwitterTweetEmbed
          style={{
            shapeOutside: "rect()",
            width: "300px",
            float: "right"
          }}
          key="1410948095563730945"
          tweetId="1410948095563730945"
        />
        you cannot have internet but can make calls for others to editorialize
        your evidence, if you could at all record before they scream HIPAA at
        you and take your phone. 13 days for me, assailants with evidence was
        not for me trying to elope from an undescribed involuntary siringe
        without even looking at the hallway-camera by the patient
        representative, and I have my armed rights of closed-carry benevolence
        taken on the basis of admittedly building govtech, and critisizing the
        phychiarist's method of income, being brought forward demand of
        non-rolloverable hours non-concurrentable, collective bargainin fraud.
        The doctor-follower calls it bizarre and university economics fails when
        see debt as dead-weight in microeconomics.
        <h1>Welcome to Truncated Sales Tax / Millennial Income Deficit</h1>
        <h2>3%ile average-indexed-purchases, about $60 max at $2k</h2>
        My mom said, “good thing you aren’t allowed to get a gun,” after me
        saying I am anti-government and urging her to take back her lie that I
        pushed her towards my incarceration and slander as a bipolar
        schizophrenic, while she lives in this house that is of 44x
        third-party-beneficiary usurped. 1 Peter 2:10 , 1 John 2:22 Riverview
        Psycologist said, "this is Hell, yes," when I asked. Women, right?
        <br />
        <br />
        <TwitterTweetEmbed
          style={{
            shapeOutside: "rect()",
            width: "300px",
            float: "left"
          }}
          key="1434278985589006344"
          tweetId="1434278985589006344"
        />
        <span>
          “A susceptible arm in Mother jones,” Kimlead describing the Steele
          Douche.
          <br />
          employmentByCohort: "he goes beyond the Science"
          <br />
          <img
            style={{
              float: "left",
              display: "inline-block",
              width: "250px"
            }}
            alt="old people: @truncsalestax, froth.app"
            src="https://www.dl.dropboxusercontent.com/s/8qbefb3qow5e27g/Screen%20Shot%202021-09-07%20at%206.19.18%20PM.png?dl=0"
          />
        </span>
        <Cable
          style={{ width: "300px", height: "490px" }}
          onError={handleScollImgError}
          src={
            this.state.nolinkedin
              ? ""
              : "https://www.linkedin.com/embed/feed/update/urn:li:share:6841120482733916160"
          }
          float="left"
          title="https://www.linkedin.com/posts/nickcarducci_unemploymentbenefits-activity-6841120483153330176-xhhz"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 1]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <iframe
          style={{
            float: "left",
            shapeOutside: "rect()",
            width: "100%",
            maxWidth: "800px",
            height: "500px"
          }}
          src="https://vaults.biz/#:~:text=employmentByCohort"
          title="vaults employmentByCohort"
        />
      </div>
    );
  }
}
