import React from "react";
import GDP from "./GDP";
import TwitterTweetEmbed from "./TwitterTweetEmbed";
import Cable from "./Dropwire";
import { UAParser } from "ua-parser-js";
import InstagramEmbed from "./InstagramEmbed"; //"react-instagram-post";
import { iGpostScript1 } from "./instagrampost1";
//import Misses from "./misses";

export const shortNumber = (scler, notRound) => {
  var newnum = String(Math.round(scler));
  if (notRound) newnum = String(scler);
  var app = null;
  var decimal = null;
  const suff = ["", "k", "m", "b", "t"];
  for (let i = 0; i < suff.length; i++) {
    if (newnum.length > 3) {
      decimal = newnum[newnum.length - 3];
      newnum = newnum.substring(0, newnum.length - 3);
    } else {
      app = i;
      break;
    }
  }
  return newnum + (decimal ? "." + decimal : "") + suff[app];
};

export const zeroPad = (num) => {
  var res = "0";
  if (String(num).length === 1) {
    res = `0${num}`;
  } else {
    res = num;
  }
  return res;
};
export const child = (index, absolute) => {
  //dateSpan = date - covidStart
  //dateSpan / (31556952 * 1000);
  //const years =_* 80000
  //31556952 = 1 year in seconds
  index = index ? index : 5;
  var year = 2015 + index;
  const localized = (date) => new Date(date).setHours(0, 0, 0, 0);
  /**
        `${year}-${zeroPad(new Date(localized()).getMonth() + 1)}-${zeroPad(
          new Date(localized()).getDate()
        )}` */
  return (
    (((new Date(localized(`${year}-01-01`)).getTime() -
      new Date(localized(`2015-01-01`)).getTime()) /
      31556952) *
      80000) /
    1000
  );
};
export default class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      browser: name,
      ios: name.includes("Safari"),
      iosNoPhoto: name.includes("Safari"),
      width: null,
      lastWidth: null
    };
    this.repeat = React.createRef();
    this.trump = React.createRef();
    this.gdp = React.createRef();
    this.levin = React.createRef();
    this.options = React.createRef();
    for (let i = 0; i < 250; i++) {
      this["scrollImg" + i] = React.createRef();
    }
  }
  componentDidMount = () => {
    this.setState({
      childrenAbducted: shortNumber(child()),
      ios: this.state.browser.includes("Safari")
    });
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);
    window.addEventListener("resize", this.refresh);
  };
  componentWillUnmount() {
    clearTimeout(this.mounting);
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
    window.removeEventListener("scroll", this.handleScroll);
  }
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
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY; //+ window.innerHeight;
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
  componentDidUpdate = (prevProps) => {
    if (this.props.pathname !== prevProps.pathname) {
      clearTimeout(this.check);
      const check = () => {
        if (this.props.pathname === "/") {
        } else if (this.props.pathname === "/options") {
          window.scroll(0, this.options.current.offsetTop);
        } else if (this.props.pathname === "/gdp") {
          window.scroll(0, this.gdp.current.offsetTop);
        } else if (this.props.pathname === "/trump") {
          window.scroll(0, this.trump.current.offsetTop);
        } else if (this.props.pathname === "/repeat-offenders") {
          window.scroll(0, this.repeat.current.offsetTop);
        } else if (
          this.props.pathname === "/levin" ||
          this.props.pathname === "/levin-blunder"
        ) {
          window.scroll(0, this.levin.current.offsetTop);
        }
      };
      check();
      this.check = setTimeout(check, 4000);
    }
  };
  render() {
    const { childrenAbducted } = this.state;
    const handleScollImgError = (e) => {
      if (e) {
        this.setState({ settleDropboxFree: true });
      }
    };

    let arrayOfnumbers = [0];
    const scrollnum = () => {
      const num = arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      arrayOfnumbers.push(num);
      return num;
    };
    const space = " ";
    return (
      <div
        style={{
          overflow: "hidden",
          width: "100%",
          maxWidth: "600px",
          textAlign: "center",
          fontFamily: "'Quantico', sans-serif"
        }}
      >
        <a
          style={{
            shapeOutside: "rect()",
            float: "right",
            width: "max-content",
            padding: "0px 10px",
            fontSize: "20px",
            fontFamily: "'Pacifico', sans-serif",
            color: "rgb(230,230,255)",
            backgroundColor: "rgb(32, 22, 11)"
          }}
          href="https://micro-theory.com"
        >
          micro-theory.com
        </a>
        <a
          style={{
            shapeOutside: "rect()",
            float: "right",
            width: "max-content",
            padding: "0px 10px",
            fontSize: "20px",
            fontFamily: "'Pacifico', sans-serif",
            color: "rgb(230,230,255)",
            backgroundColor: "rgb(32, 22, 11)"
          }}
          href="https://truncatedsalestax.com"
        >
          truncatedsalestax.com
        </a>
        "child life services." ccc parent trust building, ppp existing biz trust
        building, bbb nationalize broadband fee contractor trust building.
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1Ch6mJGtJO57EANZuP6v1EnMyCpS52YED/preview"
          }
          float="right"
          title="National Report (Newsmax) - John Glizzzly"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        "$2t, $3 trillion, $4.9 trillion, what is the final, 'price tag,' we are
        still waiting on that. Some say voting rights bill, with stronger
        federal hand, will pass more than the bbb, but that isn't true:
        republicans and key decider manchin is far from considering it, and to
        say they will drop bbb for voting rights is a moot point as neither will
        see the light of day until after Christmas.
        <h2>
          collateralized debt has no bearing from free rider immutable article 4
          with industry variant multiple of 11/12 jury
          <br />
          <Cable
            style={{ height: "220px" }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1sTWJkxqtN27TJVYI5uF65U_p3HsYtY_9/preview"
            }
            float="left"
            title="National Report (Newsmax) - William Barclay NY State Assemblyman"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <span style={{ fontSize: "9px" }}>
            "hospitals have lost 20% of workforce and now having a real crisis,
            I mean if you can't have employees you can't sell your products
            successfully, price deflation per hour be damned," mortality
            projections and{space}
            <a href="https://humanharvest.info/polio">
              ms matched paralytic polio
            </a>
            , by the numbers of accute flaccid paralysis class. YOU DID NOTHING!
            Sewage correlates integrally with lifetime mortality anyway, as
            does, "age-standardized-excess-deaths," when you fix for cohort
            size, boomers are called such for a reason,{space}
            <a href="https://fred.stlouisfed.org/graph/?g=H5XB">56m/40m</a>
            {space}normalized excess 75+ 2020-2030.
          </span>
        </h2>
        "Racing to hire workers, and the human lifecycle, we have to get these
        kids to work minimum wage job. I was working check to check, and getting
        behind on my bills. Many parents are seeing prices rise and wait list
        growth. 20% have quit job for childcare, for single parent it is 35% of
        their income. Childcare Jost were as much as rent. Waitlist, 3 years
        long. 300k women down from pandemic, that is out of 170m. Pay no more
        that 7% of their income, early childcare income can’t be paid less, so
        it will take significant public funding to solve this problem,” actually
        it only invokes work deficit for monopsony prices.
        <h2>
          I don't like math, I{space}
          <a href="https://qr.ae/pG6Asa">like what you can do with it</a>.
        </h2>
        There is lag to 3/2020 trust building by king debt trump ppp existing
        biz. Comparative advantage tech advancement is price deflation per hour
        productivity, is all that matters. Hours per home doubles every 5 years,
        10 home, 20 bonds m2 checking currencyComponentOfM1, 40 material. Idk
        labor. double employment for childcare to, "solve the problem."
        <br />
        <br />
        "Raising the debt [ceiling] spends nothing it only authorizes the
        Treasury to borrow to cover [new] spending and the cost of the [February
        budget] previously authorized by Congress."
        <br />
        <div
          style={{
            borderRadius: "15px",
            margin: "10px",
            padding: "10px",
            backgroundColor: "black",
            color: "white"
          }}
        >
          Meant to be serfs and employables in perpetuity, because they cannot
          figure out how to truncated sales tax 2025 against Menendez, and
          (cash/debt)*income every year back, and have to 1/4 1/4 1/4 debt spend
          40% free rider mutable 60% 2010-2020 $4t/yr premium pentagon pensions
          expiring claims and inequality by asset generator, nor gini, a
          corruption of lender work deficit and productivity itself: price
          deflation per hour, over time, and launder such spending 1/3 of all
          debt, public and private, to show only $2t checking, with $12k/year/p
          debt, $3k/year/p bond m2, $64/year/p new force majeure implausible
          deniability third party donee beneficiary claimable, by class; not
          cancel forbidden by past labor-equity-demand, nor bailout forbidden by
          savers - and certainly, not discriminatorily.
        </div>
        <br />
        "The debt ceiling is NOT a limit on deficit spending. This is an
        unfortunate presumption.
        <br />
        The federal debt ceiling is what the feds will pay against what has
        ALREADY been spent.
        <br />
        This is no different than a man running up a credit card debt while his
        wife refuses to send more than a fixed amount to Amex. The family still
        owes the balance and putting more on the card is not prohibited.
        <br />
        Regardless of whether the money “exists” the debt still does."
        <br />
        <div
          style={{
            borderRadius: "15px",
            margin: "10px",
            padding: "10px",
            backgroundColor: "black",
            color: "white"
          }}
        >
          It is third party donee beneficiary claimable, only to be resolved by
          class (cash/debt)*income every year back, then truncated sales tax for
          article 4 free rider immutable industry-variant-multiple-of-11/12-jury
          designations for duress of commerce as to not compete with consumers,
          sewage, police and lawsuits. The grounds for such remediation is force
          majeure implausible deniability of repo-cycle kept down payment
          launder by loitering borrower intent. Cancel is forbidden by past
          demand, “new deal” bailout by savers… of checking accounts.
          Bottom-left politics says dollars have more standing over themselves
          when the above policy is iterated by me, and plausible, with
          geohash/month to accounting software and congress from paytech for
          regular business, nor non-production-taxable, nor certainly not, gift
          tax.
        </div>
        <br />
        "The money is borrowed, mostly in bonds and loans from other countries.
        So yes, it exists. And we pay it back… with interest. Just like any
        other loan.
        <br />
        <div
          style={{
            borderRadius: "15px",
            margin: "10px",
            padding: "10px",
            backgroundColor: "black",
            color: "white"
          }}
        >
          It is also counterfeit in contract, in standard EULA form; it is, by
          precedence, the ‘no surrender’ clause, as to not invoke third party
          donee beneficiary grounds intentionally. Be it by $12k/year/p debt
          $3k/year/p bond m2 $64/year/p new (U.S., 2020 with similar disparity
          since ~1977) let alone the share split of dollars invoking savers’
          requited consent, force majeure implausible deniability, implausible
          landlord use above units or days (not price control), nor repo-cycle
          kept down payments of the co-signers’ customers. Compounding and
          general income is the entry of fault, however, as business account
          investment do not invoke these rights of the third party to the
          contract, say, up the supply chain. 1-level-board
          max-profit-royalty-contracts can replace all debt “investment,” then
          government can run on truncated sales tax, for sewage, police &
          lawsuits, for free rider immutablity, only after amortization of the
          principal “savings” (cash/debt)*income every year back, to not launder
          that to debt-service. Now, 1/4 1/4 1/4 premium pentagon pensions 10%
          debt-servicing, 40% debt-spending, up to 40% debt-servicing, in states
          like NJ turnpike authority.
        </div>
        <br />
        "The Federal government doesn’t 'earn' money by taxing. It’s where the
        money came from in the first place (if anybody but the government prints
        a US Dollar, that’s counterfeiting).
        <br />
        It puts dollars into circulation by spending, and takes them back out by
        taxing. If it didn’t spend more than it taxed, there’d be no money in
        circulation for anybody to use… Well, probably some form of “money”
        would spring up, but it wouldn’t be US Dollars. US Dollars come from the
        US Government. Says so right on there.”
        <br />
        <div
          style={{
            borderRadius: "15px",
            margin: "10px",
            padding: "10px",
            backgroundColor: "black",
            color: "white"
          }}
        >
          Amazingly, it doesn’t. Can you tell me why there is only $2t
          currencyComponentOfM1 after 40% debt spending 2010–2020 for a $4t/yr
          budget? I have found v1 to be fraudulent. mv1===mv2==GDP, but that is
          impossible, m2 being both bonds and m1. $66k/year/p GDP, $6k/year/p
          velocity of m2 minus GDP divided by m2 minus currencyComponentOfM1
          times currencyComponentOfM1…
        </div>
        <br />
        "The money is borrowed, mostly in bonds and loans from other countries.
        So yes, it exists. And we pay it back… with interest. Just like any
        other loan."
        <br />
        <div
          style={{
            borderRadius: "15px",
            margin: "10px",
            padding: "10px",
            backgroundColor: "black",
            color: "white"
          }}
        >
          It is also counterfeit in contract, in standard EULA form; it is, by
          precedence, the ‘no surrender’ clause, as to not invoke third party
          donee beneficiary grounds intentionally. Be it by $12k/year/p debt
          $3k/year/p bond m2 $64/year/p new (U.S., 2020 with similar disparity
          since ~1977) let alone the share split of dollars invoking savers’
          requited consent, force majeure implausible deniability, implausible
          landlord use above units or days (not price control), nor repo-cycle
          kept down payments of the co-signers’ customers. Compounding and
          general income is the entry of fault, however, as business account
          investment do not invoke these rights of the third party to the
          contract, say, up the supply chain. 1-level-board
          max-profit-royalty-contracts can replace all debt “investment,” then
          government can run on truncated sales tax, for sewage, police &
          lawsuits, for free rider immutablity, only after amortization of the
          principal “savings” (cash/debt)*income every year back, to not launder
          that to debt-service. Now, 1/4 1/4 1/4 premium pentagon pensions 10%
          debt-servicing, 40% debt-spending, up to 40% debt-servicing, in states
          like NJ turnpike authority.
        </div>
        <br />
        “How can the American people get access to socialist spending like
        childcare.”
        <br />
        <div
          style={{
            borderRadius: "15px",
            margin: "10px",
            padding: "10px",
            backgroundColor: "black",
            color: "white"
          }}
        >
          I wouldn’t call anything but UBI socialist, and I wouldn’t even call
          it that because we respect labor equity, as to not invoke work deficit
          of new income, by rent, false bid pools or repo cycle kept down
          payments implausible deniability
        </div>
        <br />
        "those acting criminally," isn't with standing if malfeasant or
        comparatively innocent. "defund the police and bail reform is racist,"
        because crime goes up elastically. actually, euros have a lot to catch
        up to, there is growth but not growth of growth. Isn't "criminality,"
        moot when bonds profit from net loss incarceration? Truncated sales tax
        at your grocer, after (cash/debt)*income, every-year-back (CDDTIEYB).
        Bail means no evidence imo, if you have some you can always review it
        later. The arresting officer has all the evidence you'll ever get
        anyway.
        <br />
        "$15k worth of merchandise on bid, then sold on a{space}
        <a href="https://www.quora.com/profile/Nick-Carducci">
          fraction of a price
        </a>
        {space}on facebook marketplace." Christina Thomson in the newsroom.
        Kristina, Thanks
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1vWe5SAZy-pk-sdcS5mRKjZz5y-W9aBZJ/preview"
          }
          float="left"
          title="National Report (Newsmax) - Ron Vitiello fmr acting ICE Director"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        "the drugs, guns and people smuggling enrich corrupt governments," stop
        surges in past, hold people for due process. many restay with ice or
        flee. that is why that is what happeens. that is why the flo0w is so bad
        (+ 3m/yr+ all immigration = 40m legal + 6m illegal) cvp ended the last
        surge, and stopping that is why the [...destruction] of humanity is,"
        Ron Vitiello,{space}
        <a href="https://teapharmacy.party/drugs">with dog</a>
        .
        <br />"
        <a href="https://humanharvest.info/polio">
          A downslope, instead of an upslope
        </a>
        . For now, it seems like it is preventing people from hospitalizations
        and deaths, it is a big benefit."
        <Cable
          style={{
            height: "440px"
          }}
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1C0W9okKGsyRykrdqWD5IZWQ_0-XQWqYA/preview" //"https://drive.google.com/file/d/1A6e4vddeJ_Dm_r8PXgczo7zgz3ZpiU3V/preview"
          }
          float="right"
          title="Bernie and Sid (77WABC) - Bill O'reilly face while chat stream"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <Cable
          style={{
            height: "440px"
          }}
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1A6e4vddeJ_Dm_r8PXgczo7zgz3ZpiU3V/preview"
          }
          float="right"
          title="Bernie and Sid (77WABC) - Bill O'reilly face while chat stream"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <h2>
          character witness & state victimization of fines in scopes, then
          consumer fraud act of nj, -less industry-variant-jury of 11/12
          multiple (IVJOETM)
        </h2>
        “Most liberal people don’t want bail er, most people want cops and feel
        safe when they leave their homes. They want to feel safe.” D Lemon
        “Don’t listen to all the way fat left, bail reform, people who commit
        crime should be behind bars, shouldn’t be on the streets, mental health
        and those out of the streets [call rent over units or days not price a
        mental illness], and those people that have been on the streets have
        been released after Covid. They don’t want to talk about why let out,
        why they are there in the first place, because they won’t get elected.
        They don’t want to come from the fringe _ _ _ crew [say
        rollover-insurance to a psych in NJ, get locked up for 13 days, $2k/day
        by net loss bond profit]. What is happening to mental illness (sadness
        and homelessness? What about cap rent at units or days, not price) more
        cops (ween jail off bonds net loss profit) and more people of power to
        enact those policies.
        <br />
        We are not setting the stage for three hikes, if I knew I would, the
        goal is price stability and inflation are different stories, it is
        pandemic expected embedded by pandemic of mortality that we actually
        projected in 2015. It is a self-fulfilling prophecy. So inflation would
        be juiced but ccc would help those prices, but not the lender landlord
        insurer work deficit.
        <br />A greater supply of housing would reduce price pressure on shelter
        costs, and home-contractor monopsony is no matter to my phat pussy."
        <h2>
          Amazon: “Healthcare on day one, do what is best for our employees.”
          Brought forward demand expiring claims is not helping.
          <br />
          <span style={{ fontSize: "9px" }}>
            Krugman and I believe non-rollover are a net loss by expiring
            claims, subscription by tech is concurrentable and collective
            bargainable, neither like a flaccid corporate account loss nor
            estimates{space}
            <a href="https://qr.ae/pGqmOq">optionable</a>.
          </span>
        </h2>
        "marxist revolutionaries in the open, our enemies russia and china are
        building weapons," well if “Speculative into the now,” kidney harvesting
        China author, why are you inciting violence. Hasn't Putin and Xi served
        their time already? YOU FUCKING TERRORIST
        <br />
        "students for democratic society hanoi vietnam gut preference for
        disorder raskin father anti castro cubans for soviet meeting with ted
        kennedy, kgb doing research for our government. liberal papers east
        germany north korea and vietnam, north traty organization, umdb early
        rescamskiski plan in poland radical socialist elite party now people
        party, stand up an antivaxx air force. ordered to destroy democratic
        policy studies, ...
        <a href="https://www.mtsu.edu/first-amendment/article/1201/students-for-a-democratic-society#:~:text=Shortly,">
          telling tom hayes he should be shot
        </a>
        , my proudest moment, making his scared with several agents around.
        Counter hegemony now in Italian catholics, educate then revolution,”
        communist talk radio guy, Jimmie.
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1V4MRqGmOVNBq-FxFzb4t0OZKSOx0eKbC/preview"
          }
          float="right"
          title="Rob Schmitt (Newsmax) - debt spending"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <h2>
          <span style={{ fontSize: "9px" }}>
            “National debt will someday destroy our country. Covid mandate turn
            supply chain issue into a full-blown crisis.”
          </span>
          <br />
          credit is theft, without usury is Islamic banking, but to say credit
          cycle is Marxist
          <br />
          <span style={{ fontSize: "9px" }}>
            third party beneficiary donee claimable, or else!
          </span>
        </h2>
        "We'll focus on the percentage of people by state{space}
        <a href="https://worldpopulationreview.com/state-rankings/voter-turnout-by-state">
          that showed up
        </a>
        {space}for the last presidential election. Highest % VEP New Jersey
        (84.58%) Lowest % VEP Arkansas (62.00%)," not only are candidates never
        available that present anti rent seeker ideas, parties are ideological
        duress. this is skewed away from verifiable consent, and doesn't even
        nominally when abstaining is a default vote, "no."
        <br />
        “Ohio is king debt Trump country, 3rd highest natural gas producers.
        First time in 70 years we had population growth, and that economic
        growth. Attributed to trump oil and coal mining, first time in my
        lifetime to take on communist china running rimshot over democratic and
        republican economic cheaters in uspto defectors and open source
        fundamentalists. ...These{space}
        <a href="https://nationalsecuritycasino.com/">illegals</a>
        {space}coming across the border. First act they are coming across the
        border is a felony, crime, that should be punished. The leftist media
        thinks america first is a campaign slogan. It was a trump doctrines,
        putting Americans ahead of foreigners. It is not that we hate
        foreigners, it is about putting the safety and jobs of our people,
        first. ...Democrats and Republican rhinos often trample over our
        constitutional rights. I want fighters like Ted Cruz, Jim Jordan, Donald
        Trump, and myself, Josh Mandel dot com. I need donations from regular
        americans, credit is income. Are you thinking of home refinance,
        interest rates are low, take advantage of monthly savings. Lets look at
        what your goals and objectives are, customize and tailor a loan for your
        purchase, $1000 a month, because they look at your entire picture, not
        just the home. You can even skip two mortgage payments, to make UPFRONT
        savings." *slurps learn how to amortize retard. Probably liking rich
        valdes'{space}
        <a href="https://nationalsecuritycasino.com/levin">taint</a>
        {space}as I type and just is replaying this tape.
        <h2>
          <span style={{ fontSize: "9px" }}>
            tranquility and voluntry trade
          </span>
          <br />
          Notice the, here we have a lender landlord insurer worker deficit; a
          {space}
          <a href="https://teapharmacy.party/drugs">white society</a>, in the
          water. dems/walgreens are drug lords
          <br />
          <span style={{ fontSize: "9px" }}>
            "they need to character evidence to destroy the fabricators of
            society;" save the animals from Fauci Craft Beers
            <span role="img" aria-label="tm trademark">
              ™️
            </span>
          </span>
        </h2>
        “32-47 month recession after a quarter rate hike, they want a 50000 Dow
        Jones so everyone feels good. Inflation is a tax on the poor. You are in
        deep doodie. no recognition of underlying structural problems, all
        politics because drilling portends into farm food and energy price
        shocks beyond april and june. the notion that economy does well is boom
        then inflation, it is count unemployed is close to 10%, if you take 190m
        open jobs actually out there on the bid. Home prices of foreigners is a
        national security issue, why do we care? They deport{space}
        <a href="https://qr.ae/pGqeJd">inflation</a>. Long term, we are
        hollowing out the economy; well they make 90% of the batteries for the
        electric cars. My last policy under the Trump admin was to 'Buy
        American' - if we don't make it here, we don't have supply chains here,
        we have fragile supply chains; it is just where we stand. If Ukraine or
        Russia and China joins NATO it will be catostrophic, if Russia takes UK
        and China moves in on taiwan.. russia and china cyber attack is the
        reason for a convict-free intranet emulated by on-device, end-to-end and
        tamper-proof, grid-dns rights, all authenticated by login.gov. That
        would solve the drug war between the people and walgreens/state as well
        as{space}
        <a href="https://nationalsecuritycasino.com/repeat-offenders">
          missing children
        </a>
        . Humility and strength that I think is needed, ...Take the temperature
        down, have everyone not important take a step back so my pussy can take
        control." JORDAN PETERSON WAS RIGHT. "Anti gun unit that kick down doors
        takes the guns out of the hands of the people that shouldn’t have them
        look at her options to keep people safe, residents of New York to keep
        people safe, and they are telling me they do not feel safe."
        <br />
        <br />
        <Cable
          style={{ height: "440px" }}
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1IfFwLTgPSNpT4Z9YNqyC7lxlZQwfGF2h/preview"
          }
          float="left"
          title="Chris Salcedo (Newsmax) - Matt Gaetz"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1Cl8nAf5kSP2J6BuMiql6TcisXtDM1zZt/preview"
          }
          float="right"
          title="Chris Salcedo (Newsmax) - vaccine mandate is article 4 use case, because vaccines just work, believe me"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        "That's the last thing we should do with tax-payers funds, investigation
        come before the sentance," but the arresting officer has all the
        evidence, you can make investigations a review of the evidence, and jail
        when there is some only.
        <br />
        <br />
        Cases doesn’t mean it is spreading, Chris. “Fallacious fatuous
        fear-porn,” is all you. It still stands that it must come from
        somewhere, it you think it work, and if you think it works, you must
        think it is an evolutionary trait, if you think it, “requires cell to
        replicate.”
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1WB-zeHITUGWaBOMNI86kWS7SYfJXvWWV/preview"
          }
          float="right"
          title="Chris Salcedo (Newsmax) - Diamond & Silk on Andrew Cuomo order to return book profit $5.1m"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “He killed a lot of people, and he should be in gitmo for that,”
        <br />
        <br />
        Not legitimate because the minority is not with standing, nor is
        treasury shares in outstanding when in price-to-earnings, or collateral
        price fixed unless in inflation, intermediate-labor nor bond nor price
        elastic asset in gini.
        <br />
        “That is the problem with america, people are so angry, they cannot be
        fair.” I am only angry at unfairness, Alan Dershowitz. Get off my lawn!
        <br />
        <br />
        Bo Snerdley ("conservative"): "Direct cash to parents per kid, benefit
        fund is running out," of itemized counterfeit. "No plan to pay this back
        in the future." All debt has a plan, that is to debt service
        collateralized and bailout uncollateralized, for merely a lender work
        deficit, $12k/year/p debt $3k/year/p bond $64/year/p new. Businesses in
        america with credit as income isn’t really work. Repo cycle kept down
        payment third party beneficiary donee claimable is force majeure
        implausibly deniable, so when the right and top left wall st bailout and
        cancel instead of reverse people, just know they are walking into a
        trap, showing their intent to harm. Obamacare and private insurance is
        net loss, Krugman and I agree, except I explain it a bit more: expiring
        claims is flaccid loss like profits collective. Say rollover insurance
        to a psych and get locked up in nj.
        <br />
        <br />
        Barney Frank doesnt include non-voting youth in polls, because wehave no
        anti rent seeker candidate.
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1useG43jtYZkFm6CT9oDfOPr9MZBjJXna/preview"
          }
          float="left"
          title="American Agenda (Newsmax) - Barney Frank should be dead already politician on virus"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “No one predicted{space}
        <a href="https://humanharvest.info/testing">omicron</a>, the majority of
        people want vaccinations and masks,” every Darwinist, or protistologist,
        or part-based evolutionary and taxonomist did, that is not how science
        is made, you need to put the evidence in front of a{space}
        <a href="https://humanharvest.info/testing">industry various jury</a>.
        The fallacy everyone except myself fell for is that virus is not an
        evolutionary trait not “reproduced” per prevalence only with cell, but
        is non-exclusive byproduct. Need all-inclusive testing, by symptom, to
        even correlate cause.
        <br />
        Let alone vivo-prove it.
        <br />
        <br />
        "Really confirms and solidified new expert from MIT testified as much."
        put it in front of a varying industry jury douche.
        <br />
        <br />
        You literally get PCR positive per what you look for. the probability is
        not low because there are hundreds of thousands that haven't been
        discovered that ALREADY EXIST. you think it is evolutionary trait or it
        doesn't require cell to "replicate?"
        <br />
        <br />
        <TwitterTweetEmbed
          style={{ float: "left", width: "300px" }}
          key="1428312309685002241"
          tweetId="1428312309685002241" //1391836586707496962//1434568443496370179
        />
        “When you telegraph will show up to work high, is when I start preparing
        for your resignation,” Greg Kelly, alcoholic. It is a gateway currency,
        we are going backwards in tech advancement with your income from credit,
        douche. Why do you care about another person's weed use?
        <br />
        "A lot of these criminals are high on drugs, we do them good by
        arrenting them and forcing them on the streets with implausible landlord
        use and mortgages, for my hubby and I so I can dance around on net loss
        77WABC propoganda unit by the grocer who doesn't want to pay for jail
        with truncated sales tax." Lidia Curanai, lender work deficit. Chicken
        or egg, criminals doing drugs so you don’t hire while instigating
        implausible landlord use and mortgages third party donee beneficiary
        claimable. We have a lender work deficit. Half 65+ 2.8m continuing
        claims, most disability, 20x/millennial rental-income, you people are
        the market-communists, had your whole lives to save. Occupy wall st gets
        65%, and expiring claims public or private nor finance by invoice is not
        that. Expiring claims are third party beneficiary donee claimable, ever
        hear of no surrender in an End User License Agreement? Chicken or egg,
        Lidia’s husband is driving me into insanity. We have a lender work
        deficit. While $12k/year/p debt $3k/year/p bond $64/year/p new, that is
        mostly private, like Lidias’ lender work deficit husband. She has a
        conflict of interest in reporting the financial news and advertisements,
        for christ sake if you say rollover insurance to an orthopedic surgeon
        in red bank nj you get locked up for 13 days
        <br />
        <br />
        ‘Share the love,’ Suburu, “when you buy or lease, contribute to
        charities,” why wouldn't they just settle without implausible lease use?
        useless greed and third party beneficiary donee claimable
        <br />
        “Phony national emergency,” Greg kelly.
        <br />
        What is your basis of that other than population growth a life
        expectancy ago? Are you ageist when I say it? You’re a fucking dull
        headed moron, you should{space}
        <a href="https://teapharmacy.party/drugs">toke one</a>.
        <br />
        "Excessive vanity or anger," is your problem douche. The right are
        retards working against $12k/year/p debt $3k/year/p bond $64/year/p new
        dollars and it is due for tort over third party beneficiary claimable,
        along with implausible landlord use above 30 days or 5 units (not
        price), expiring claims non-rollover insurance, repo cycle kept down
        payments force majeure implausible deniability of third party savers.
        Ever see a no surrender clause in an EULA? Fractional reserve in
        contract busy work hours as productivity self-harmers. Lender work
        deficit is slower “growth,” of the good kind. Price and hours in gdp
        isn’t good, “growth.” Profits are just flaccid collective loss of
        outlays withheld.
        <br />
        “Give him a chance,” I know him, he giddily talks about lighting up with
        his own pot and rolling papers. It’s going to be fun. Biggest job in the
        world and he goes to Africa.”
        <br />
        “Weed is like having a drink, it is the same thing,” bullshit
        <br />
        I have better motor skills with it. Open source ingredient lists. It is
        not a gateway drug. Dr sibet look at me. You people correlate prevalence
        without basis of smokers
        <br />
        Ad council correlates prevalence without basis of smoker. You call the
        pandemic a phony emergency because of mortality projections by
        population growth a life expectancy ago now? If trump goes down this
        route for honor system signatures and magnetic data auditing fraud, he
        will have to for ppp trust building existing business
        <br />
        <br />
        NATO is a defensive threat, like open-carry (put it in luggage). Why
        wouldn't we defend Russia if they get attacked? We should be{space}
        <a href="https:/truncatedsalestax.com">local anyway</a>.
        <br />
        <br />
        <TwitterTweetEmbed
          style={{ width: "300px", float: "right" }}
          tweetId="1416803308824633347"
        />
        Dick Morris: "Bribed by Putin and accepted a job," with $12k/year/p debt
        $3k/year/p year #64/year/p
        <br />
        <br />
        If your guy wants to deny the election on my mortality projections he
        will have to for ppp trust building existing business.
        <br />
        <br />
        Work deficit when you target inflation without wages, assets, homes, nor
        bonds, just material, or force majure implausible deniability by expiry
        or estimate option to buy sold fraud.
        <br />
        Brian Kilmeade: “What gives you jobs, is profit,” no that is just
        withheld outlays.
        <br />
        <br />
        whistleblower-/open-source-plants remain on one beat, stay-at-home moms
        and educators are on the bonded dole
        <br />
        <br />
        Free rider mutable expiring claims. Economists favor hours as
        productive, microeconomists who fail at finance become politicians.
        <br />
        <br />
        I have an answer for Alex Berenson
        <br />
        disparity between "non-political"
        <br />
        testing in Israel because they have an
        <br />
        all-inclusive regime for the non-exclusive byproduct debris of
        bacterial-infection that is virions,
        <br />
        because prevalence does not cause, make, but non-exclusive or
        all-inclusive byproduct and warning mechanism, as well.
        <br />
        Do you honestly believe it is an evolutionary trait or do you think the
        first taxonomy wise, just works haha or just appeared.
        <br />
        I'm an expert in statistics, market history and propogana.
        <br />
        <br />
        It’s simple, if you don’t have the evidence you have to acquit. If it
        registered by the officer anyway. You can have a retroactive review.
        <br />
        Non-voter anti rent seeker can split both parties, so truncated sales
        tax 2025 against Menendez after amortizing principal of debt serviced
        collateralized debt and bailed out uncollateralized debt.
        <br />
        Majority simply in guber, let alone plurally majority everywhere,
        especially if including ideologically duressed right and top left. Third
        party beneficiary donee is claimable and force majeure implausible
        deniability of impossibility $12k/year/p debt $3k/year/p bond $64/year/p
        new. They are showing borrowers and bond “investors” 4x principal. Feels
        like money laundering what the co-signer-consumer, of the loitering
        borrower, pays for expiring and estimates material & labor. Krugman
        agrees, finance is a net loss, and he is a macroeconomist, they have
        prices and hours upside down if tech advancement price-deflation in a
        time-series regression analysis by policy is achievable. We are going
        backwards, 10x hours per home since 1970
        <br />
        <br />
        Listen to statisticians nor saveface scientists who cannot imagine null
        hypothesit of vitro restrospective instead of
        lawyer-like-scientific-method of vivo-creation in a vacuum. being a
        sheep, just going along with what they said, more often in science than
        discovery allowed in statisticians by whistleblowers.
        <br />
        Medication cost goes to the patient with no insurance coverage and
        insurer work deficit is folded. you ARE too stupid, steve trevalese,
        $12/year/p $3/year/p $64/year/p, sprintify labor & materials not
        estimated sold options. he can do public emergencies across the board,
        president, hoouse speaker, senate minority leader, then you get
        execurive orders for specific people, that is wrong. He can't make
        himself president. govtech insurrection .us
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.nofred
              ? ""
              : "https://drive.google.com/file/d/1w1GVgxJHP1ibZKcRInbQPSVldHwSvysq/preview"
          }
          float="left"
          title="Stinchfield (Newsmax) - Mike Huckabee"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “FEMA should be getting aid to survivors, and getting people that need
        to and want to, to get out, and or be tracked.”
        <br />
        <br />
        “More people on the coast than 10, 20 , 30 years ago.” Huckabee.
        Government will fix this if government is your G-d, they will fix the
        weather with G-d.”
        <br />
        <br />
        “...salvage, not make a political weapon out of it.”
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.nofred
              ? ""
              : "https://drive.google.com/file/d/1kDdViDnAN70aHXezn3vtLlytBYkLRrpY/preview"
          }
          float="right"
          title="Spicer & co (Newsmax) - OH Skinner former Arizona Solicitor General"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        collateralized debts, the gov services; uncollateralized, they bailout
        <br />
        <br />
        Public donations back to people 90% spending back on free rider mutable
        tax and 60% debt spending, 1/4 1/4 1/4 premium pentagon pensions 10%
        debt service
        <br />
        <br />
        “Tax credit became $28m $421m industry,” Deminski & Doyle.
        <br />
        Could be busy-work (per hour price inflation)!
        <br />
        New $12k/year/p debt $3k/year/p bond $64/year/p, “poor woman was
        probably in a state of shock. Too profitable, there is reason for it,
        but…” would you allow repo-cycle kept down payments loitered and
        laundered?
        <br />
        <br />
        This isn’t political. Work deficit is a matter of life and death.
        <br />
        <br />
        “International bank robbery. I can make one! I don’t know if they have
        them in america.”
        <br />
        Third party beneficiary donees here to collect
        <br />
        <br />
        “Public defender of the worst kind, who just wants to let everyone out
        of jail.”
        <br />
        80% of jailed are net loss bond profit but competing with your closed
        source licensure, slip & fall attorney racket countervailing law, and
        wall st pharma cops. $12k/year/p $3k/year/p m2 bond $64/year/p force
        majeure implausible deniability
        <br />
        <br />I was failed not because I didn't have the right answers, but
        because I didn't attend once I learned they counted gdp==prices*hours as
        productive. I became a policial science major with an economics minor
        not because I wanted to pursue policy changes thru my micro-economic
        lens, but because.
        <h2>
          Macroeconomics is bullshit, insurance is net loss force majeure
          implausible deniability, laundering and loitering collateral,
          estimated or expiring scopes of material & labor.
        </h2>
        "Make sure resources spend on education gets to the classroom." Michael
        Goodwin why front-run for useless price inelasticity of bid-to-ask?
        <br />
        <br />
        <Cable
          style={{ width: "100%", height: "400px", maxHeight: "50vw" }}
          onError={handleScollImgError}
          src={
            this.state.nofred
              ? ""
              : "https://drive.google.com/file/d/1IIQt0kE6c5EgDnJOfJkImP4zrPst2E8v/preview"
          }
          float="right"
          title="Chris Salcedo (Newsmax) - playing dumb on financialized medicine"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        "$3k for full covid program," from public private expiring claim non
        rollover false bid pools, I get locked up in nj RiverviewMedCtr for 13
        days, $26k. “$3.5k for ventilation.”
        <br />
        <br />
        <Cable
          style={{
            height: "300px"
          }}
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/13UsXvY6y0efRnzdMQp-mnIPE_4TaH-XK/preview"
          }
          float="left"
          title="Eric Bolling (The Balance,Newsmax) - CBO with Psaki-Graham analysis deflection"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        Rental income v work income, cohort size average rating per year vs
        doubling a proportion diminishing capacity.
        <br />
        Each person less propensity to turnout for busy-work, natural working
        age and hours are smaller than this, where technical advancement has
        shown to be GOING BACKWARDS. Not surprising after you find GDP targets
        the opposite of price-deflation per hour productivity.
        <br />
        <br />
        “Biden is trying to get this elephant social spending through.” Eric
        Bolling. Jayapaul, "CBO numbers are fictional." Waht do you expect with
        estimated material, intermediate-labor and a wide-eyed Amtrak guy?
        <br />
        <br />
        “Underwater on polling,” likely means relative. to me that is most
        appropriately described as net.
        <br />
        “‘CBO bill scored that is not being debated.’ “Non-partisan CBO, $1t
        whatever, $3t dollars,” I heard that is the deficit amount, $4.9t total,
        like free rider mutable tax is free? $4t/yr 2010-3/2020 normal 40% debt
        spending 60% 1/4 1/4 1/4 premium pentagon pension 10% debt service &
        finally immigrants flown in on state enclaves to liberal retreats.
        <br />
        <br />
        “If you aren’t in a place you aren’t able to vote, you aren’t going to
        get the money, get the federal money.” NY Republicans
        <br />
        <br />
        Can't win without non-voter unless ignore default, "no" lest
        holdings-triggered-abstain.
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1UvvjhC5XQdznl7dIMW0vIqjgEvO0bN8d/preview"
          }
          float="right"
          title="Eric Bolling (The Balance,Newsmax) - Mark Halperin"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “Underwater on polling,” likely means relative. Senate incumbents don’t
        lose very often. Elected every 2 years and 6 years.
        <br />
        <br />
        Donors can only make free rider immutable, “possible,” granting the
        propensity of per hour price deflation of Supply and Demand
        <br />
        <br />
        “To get decent housing with credit, it requires social acceptability
        score,” Dick Morris oblivious to{space}
        <a href="https://www.investopedia.com/ask/answers/031815/why-are-there-no-profits-perfectly-competitive-market.asp">
          economics
        </a>
        <br />
        <br />
        can't claim borrowers anticipated force majeure and say you didn't.
        "Well, you'll never own your cable tv, but you will in what you borrow."
        How when $32/day/p new debt and $.18/day/p new checking
        currencyComponentOfM1? Target margin consumer surrogate, do not
        nationalize you bipartisan prick. “...what happens when the money they
        put into the market is{space}
        <a href="https://nationalsecuritycasino.com/levin-blunder">
          getting screwed up
        </a>
        .”
        <br />
        <br />
        "The Gold IRA doesn’t fall apart when the dollar falls apart.” Over my
        dead body, Dick. You are middle top and I am middle bottom. Or
        bottom-left if you acknowledge Libertarian.
        <br />
        “Small business have been knocked out, worked hard 7-days a week.”
        <br />
        “Hold China responsible for the damage the virus has done.”
        <br />
        <br />
        $8/day/p principal shown to bank "investors," beyond 1-level-board max
        profit royalty, $32/day/p shown to consumers:
        repo-cycle-kept-down-payment-on-option-general-expiry-by-estimate-court-backed-appraisal-laundered-by-loiterer-of-collateral-from-third-party-beneficiary-donees.
        <br />
        <br />
        40x debt/checking, 25x new debt/new cash, 11x gdp/down, or velocity of
        m2 minus gdp divided by m2 minus CurrencyComponentOfM1 times
        CurrencyComponentOfM1
        <br />
        <br />
        The prosecutor vs the public defender should have no bounds to racketeer
        without state victimization, just dealing in truncated sales tax, p2p
        tort without financial false bid pools duress and jailing. "Do not
        follow the law, break the law." every law you follow can break other
        laws, and slip & fall trial attorneys grovel and engorge themselves
        <br />
        <br />
        “Supply chain getting better, number 1 in energy, 1 in crime, the
        border, our standing rhetorically, internationally,” Jeff Van Drew,
        spending for more gdp isn’t productive but waste.
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1v_YRN1OrNsZubTRhnDpctphgtI3gvOsb/preview"
          }
          float="left"
          title="Saturday Agenda (Newsmax) - Rep Jeff Van Drew"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “You’re not gonna need a{space}
        <a href="https://moldmask.co">mask</a>, that wasn’t true at{space}
        <a href="https://www.politifact.com/factchecks/2020/jun/15/facebook-posts/claim-n95-masks-cant-stop-covid-19-particles-due-s/">
          all
        </a>
        .” Honesty doesn’t need context.
        <br />
        <br />
        “No matter how bad it gets, thinking positive is, ‘going towards
        greatness,’ even if it goes thru transition. We are stick-to-it people.
        What about for sale signs, let em come let em go, fresh blood.”
        <br />
        <br />
        “…guy who lit the tree is back there,” to which Curtis responds, “That
        is no bail, Democrats did that.” There was no evidence, not even a
        lighter, per incarceration net loss bond profit racket charlie angel
        wannabe. IF YOU CANNOT HOLD WITH EVIDENCE YOU HAVE NO CASE, get back to
        me when you have something REAL.
        <br />
        <br />
        “Why is NYC the greatest city in the world? What it is, not what you
        hope it will be?” What you and I see as reality is not the same.
        <br />
        <br />
        Amortize principal without debt-inelasticity bid-to-ask nor atonement
        for third party beneficiary donee counterfeit purloined. we are living
        into different world the lenders and the proletariate, impending and
        imminent for the future of war.
        <br />
        A virtuous war would be fought by volunteers, I imagine man to man
        combat is not behind a computer screen.
        <br />
        <br />
        We do know that{space}
        <a href="https://carducci.us/videos">Hitler</a>
        {space}spent a lot and promised to drain{/**hobocode */} the swamp like
        Trump.
        <br />
        <br />
        MIC production of arms section of the country, “itching for a fight,”
        The way as it is presented in Russian or U.S. media can get people
        saying, ‘O.K. let’s go.’ ...Most of us could ever possibly recall Putin
        says, 'when a fight is inevitable, strike first.'" Vladimir Posner with
        Frank Morano (77WABC)
        <br />
        What to gain involving Ukraine in NATO rather than Russia?
        <br />
        Let’s have a worldwide treaty, pro bono
        <br />
        <br />
        {/*We are working a lot more than when you were a kid. 6m/40m vs 6m/20m
        unemployed , 5x hours per worker and 2x workers per person, which
        amounts to 10x hours to home wince 1970 and doubling of hours per home,
        population growth I will give only 20% of the factor, since before 1913,
        it was nearly constant, save amortized principle malfeasance, collective
        flaccid loss, expiring claim false bid pools, or monopsony with free
        rider mutable tax outside sewage police lawsuit multiple of 12 industry
        various jury duress for minimal viable product as in microeconomics, the
        basis for self-regulation, by Pareto, says infinite producers is perfect
        equilibrium, unfettered by taxation, reappropriating of labor equity,
        rent-seeking and laborless-demand.
        <br />
        <br />*/}
        "These people can take care of themselves, struggling to get by, because
        they smoke marijuana, albeit $32/day/p new debt public 2/3 private, and
        6m/40m unemployed now, 6m/20m 1970, 20x/millennial rental-income, most
        of disability and half continuing claims, 5 years to double hours per
        home, that is 10x hours per home since 1970 and half that rate at
        10years is home prices, 20year is bonds and money, 40 is goods material
        but labour hours and price of intermediate labor I don’t know, but that
        is 5x hours per worker*2x workers per person" Rep Pete King.
        <br />
        <br />
        We are working a lot more than when you were a kid. 6m/40m vs 6m/20m
        unemployed, if rental income is counted then there is a millennial work
        deficit, but there is lender landlord and insurer work deficit.
        <br />
        20x/person 55+/millennials; half continuing claims and most disability,
        because they{space}
        <span role="img" aria-label="cancel tan-old-man">
          🚫👨🏽‍🦳
        </span>
        have the most rental income and the most debt.
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1CTgOh2SgiBImZ-hTHerOj8Vat9vM34cm/preview"
          }
          float="right"
          title="Save the Nation (Newsmax) - Star Parker on care.org and freedom-based-education, as opposed to the destruction of the family-dependency unit, like fucking plantations"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        "Socialism or communism: do you want government to choose for what you
        to do, nanny state. Urban Renewal and Education Care.org, personal
        responsibility, keep government out of the charity business. Freedom not
        family-destruction education.” “Everything gov touched breaks,
        education, healthcare, retirement systems.”
        <h2>
          if you want to be spoiled and withdrawal $32/day/p new burdens
          laundered and loitered for court-price-fixed collateral, then why
          don't we help you and put you on the front lines.
        </h2>
        <Cable
          onError={handleScollImgError}
          src={
            this.state.nofred
              ? ""
              : "https://drive.google.com/file/d/1G-2ymMN8QKTD5KwlHU94apmZH-On50yx/preview"
          }
          float="right"
          title=""
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “No behavioral threat analysis was done,” on character
        <br />
        Bachmann, “Cry for help, want attention.”
        <br />
        <Cable
          style={{ height: "300px" }}
          onError={handleScollImgError}
          src={
            this.state.nofred
              ? ""
              : "https://drive.google.com/file/d/13YVw2Us8e-O_e5ehDZ6GefAjfQMvSDRX/preview"
          }
          float="left"
          title=""
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        Some stay-at-home-mom living on compound interest, on Stephen Moore's
        Moore Money (77WABC), her call taken over mine, "We do know that Hitler
        spent a lot and promised to drain the swamp like Trump and Social
        security was forced by threat and duress upon us in 1937, I think I
        would be more of a conspiracy theorist. Census and I projected this
        pandemic mortality, prevalence does not cause, make.", "These kids are
        spoiled, want to smoke as an out because employers aren't 'allowed,' nor
        is it a protected civil right, to hire them? Put them on the front line;
        they want to abuse their body, we will help them." Listen you old-cunt,
        It is not "soft" to not put yourself in danger but get high. My body is
        better and your son couldn't get voluntary customers so had to get a
        government job{space}
        <span role="img" aria-label="side-splitting-laughter">
          🤣
        </span>
        <h2>
          <a href="https://vaults.biz">Marijuana</a>
          {space}is a gateway currency
          <br />
          <span style={{ fontSize: "9px" }}>
            (bank depositary, concurrentable, like perfectly-durable and
            maintainless public park share, hardly income by natural free rider
            mutable operating-costable and rent-seekable in withheld, expiring
            claim false bid pools, appraised-null-settled-bid outlays,
            implausible landlors use, or repo cycle kept down payments, all on
            laundering third party beneficiary donee claimable grounds); without
            wall st pharma cops script monopsony
          </span>
        </h2>
        “Businesses that fail to comply risk being shut down,” certainly need
        multiple of 11/12 industry various jury-science for duress weighing
        minimal viable product to be in realm of tranquil and voluntary trade.
        <br />
        <br />
        <Cable
          style={{ height: "440px" }}
          onError={handleScollImgError}
          src={
            this.state.nofred
              ? ""
              : "https://drive.google.com/file/d/1n082DwyfPBGpXo5yGhpw1ZvzpAbyf121/preview"
          }
          float="right"
          title=""
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        State victimization is not free rider immutable but trust building for
        debt service lender work deficit, absolutely retarded.
        <br />
        <br />
        "Marijuana is gateway heart disease,” instead of random sampling
        prevalence, use event/population as to not have to emulate random “I
        have no problem with medical marijuana, as long as it is moderated by a
        medical doctor,” so you are going to allow alcohol without marijuana
        medical use? For anxiety? Everyone can benefit from amphetamines in the
        water too, concentration would{space}
        <a href="https://teapharmacy.party/drugs">SKYROCKET</a>. "Supervision of
        medical professionals who use marijuana to not have anxiety,” is
        self-reported, character-“witness” not evidence of a crime or prevalence
        test. Hanging around the residential neighborhoods and pharmacies. jail
        or no evidence: come back when something real, not
        closed-source-licensure. no bail
        <h2>
          Socialists don’t nationalize bridge tolls.
          <br />
          <span style={{ fontSize: "9px" }}>
            for rent-seeking government gentrification and debt service and
            principal withdrawal
          </span>
        </h2>
        I hate banks because they are collective flaccid loss when fractional
        reserve (by estimate or expiry) in share split or contract loitered and
        laundered third party beneficiary donee claimable.
        <br />
        <br />
        amortize principal, I don't care about your delusional monthly,
        "savings." gdp is mostly homes, when amortized and dissolved, not public
        parks.
        <br />
        <br />
        Kenny Polcari saying ending finance will slow down housing measured by
        11/1 price without debt, as a home-contractor, makes me want to bury him
        in cement.
        <br />
        <br />
        "FCF what it allows companies to do, cap ex, investing for the future
        <br />
        600x in finance, 1x book of assets without third party beneficiary donee
        claimable income…{space}
        <a href="https://fred.stlouisfed.org/graph/?g=JLa3">
          bankers will be serfs
        </a>
        {space}after cash:debt*income thru history… damn we would have to
        discriminate literally."
        <br />
        <br />
        libertarians don't care about debt unless it is put on them, they in
        fact like it if their producers put it in their costs. they think
        economic funcamentals is watching eachothers' kids to double hours
        worked instead of that as basis under price-deflation thru supply chain.
        <br />
        <br />
        wanting to leave risk to lender but allowing them to keep down payments
        laundered by the loitering borrower, instead of awaiting compound
        interest in a business account, is not plausible-deniability (a
        business), "in the cards."
        <br />
        <br />
        “You had 10% gdp in the first quarter, you can have 17% gdp!” I knew
        this already. "Kill the bill!" Do you know where you are right now? I'll
        be sue they deliver you to alcatraz with 1 white russian drink and a
        speedball.
        <br />
        <br />
        "Not left nor right: Institutionalist, believe in this place, swore to
        no man.”
        <br />
        Brian williams
        <br />
        Swear to me
        <h2>pro&bull;fit==pro&bull;rate</h2>
        <h3>go on radio, stay out of jail!</h3>
        “The home loan benefits I got from the Army National Guard helped me buy
        my first house.”
        <br />
        <br />
        “Inflation soared more than a decade, stock market loved it. records.
        Maybe we need to rethink this, instead of 7%, maybe 20%.” Former
        National Security Director on stock prices, enumerated market-share by
        IP of design and discovery too broad, hardly in perfect equilibrium of
        infinite producers and Pareto described: the reasoning for microeconomic
        self-regulation of markets of price and duress, by per hour.
        <br />
        <br />
        <h2>
          in no instance is nationalism nor credit spending is productive,
          moniopsony of intermediate labor and material on estimates, laundered
          without third party beneficiary knowledge nor permittance
        </h2>
        <iframe
          style={{
            shapeOutside: "rect()",
            float: "left",
            width: "300px",
            border: 0
          }}
          src="https://www.youtube.com/embed/OqgUxnqc3AM"
          title="YouTube video player"
        />
        “6.8% 8.9% cpi inflation trend is not very good. I think this means we
        do not need the spending programs with $4.9t spending with $3t debt
        spending.” That is what spending is every year 1/4 1/4 1/4 10% debt
        servicing free rider mutable premium pentagon pension any way. They
        should have ended QE, and mortgage bonds, and if you do that, you have a
        chance of ending inflation in a year, or a year and a half. I don’t want
        1960’s they have been too loose for too long. I think woke climate
        change people will give Powell a hard time.”
        <br />
        <br />
        Dick Morris: “Functional equivalent of a declaration of war, ended up
        failing because it didn’t have enough assets appraised by third party
        beneficiary repo kept down payments, if you have money but cannot use it
        in the swift system, you don’t have any money. French{space}
        <a href="https://nationalsecuritycasino.com/gdp">gdp/p</a>
        {space}is the greatest.”
        <br />
        <br />
        "If we can get a durable good expenditure, that would be{space}
        <span style={{ textDecoration: "line-through" }}>bullish for</span>
        {space} market concentration by price/equality,"
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1Sr30F_jMs3mwrkq2iNyGBrmaLbEWXcFW/preview"
          }
          float="right"
          title={`Save the Nation (Newsmax) - Brandon Arnold, "Inflations' impact on you"`}
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “Tax increases that will lose 100k jobs, and slow our economic growth.”
        taxes from outside the market make more jobs for less
        price-deflation-productivity. gdp/p amidst 3% p/yr+ before federal
        reserve was{space}
        <a href="https://nationalsecuritycasino.com/gdp">nearly constant</a>
        <h2>
          market-communist, court-backed price-fixed, third party beneficiary
          Rudy “Same conclusion I have, doesn’t have all his marbles, because
          <br />
          <span style={{ fontSize: "9px" }}>
            just listening to him, getting Afghanistan refugees killed. ...165m
            people think he has dimensia. ...Putin owns him. ...sharp intellect,
            killer, may be a killer, head of KGB. ...Then get a kid who turns
            out to be sa drug addict head of a big big bank, never showed up,
            MSBC whatever the name of the bank, just lobbied for the bank.
            ...Guy who is known to be sort of a pussy. ...We are not ever going
            to use troops, I am not against never using troops, but you leave it
            open, et him think about it a little. I don't know if that is your
            decision because you are the dumbest in your lawschool class, or you
            are surrounded by lefties, Russia and China. ...His pal Xi with no
            treaty obligation to do stop designs on Taiwan. Not a bad idea to
            destroy your enemy before they get to strong and too big, isnt that
            a lesson from history?
          </span>
          <br />
          "It is one thing for Dr. Fauci to say, 'covid is not&nsp;
          <a href="https://humanharvest.info/polio">going away</a>,' but another
          for business leaders to."
        </h2>
        “The only choice is to adapt for a 1/3 that we are losing, in towards
        the way the poor cannot build as strong as rich people,” Rudy Giuliani.
        WE?!? There is utility in price-discrepancy, even for
        tornado-bound-homes. Don't call anyone but yourself communist. Even if
        free rider mutable "adaption" is retarded, we are losing $32/day/p to
        debt and you are concerned with tornadoes!? Probably want to 'adapt'
        with expiring claims false bid pools and more useless price-inelasticity
        bid-to-ask for same material. You will not be gaining more durable
        rooves, just higher bid prices for those. Why except gross corruption
        would you not end debt instead.
        <br />
        <br />
        “Last thing is education of children, that’s why public schools don’t
        work. Is a job-protection system.”
        <br />
        <br />
        “Yes, you can overdose on prescription drugs, but 'by-in-large' it is
        safer.” If FDA didn’t enable&nbp;
        <a href="https://teapharmacy.party">closed-source-licensure</a>, the
        animals would be saved and ingredients would be listed.
        <br />
        <br />
        "If you pay everyone the same, ...[mumbles]."
        <br />
        <br />
        <hr ref={this.trump} />
        “Paying money to keep green card all these years, where is my refund?”
        <br />
        <br />
        3m/yr+ 40m "legal" 6m "illegal"
        <h1>
          “We want immigration, just legal immigration. We love people, we feel
          for them, organized, because drugs.” Chairman of RNC.
          <br />
          It takes like 20 years, you’re a fucking nut.
          <br />
          Only want bankers instead of laborers? Why do you understand
          comparative advantage lost from union barrier to entry but not the
          border?
        </h1>
        <Cable
          onError={handleScollImgError}
          //img={true}
          src={
            this.state.serviceCancelingImages
              ? ""
              : "https://drive.google.com/file/d/1XQpvhJvh2xpajuaBaiDZs1bUwkxsdlMn/preview"
          }
          float="left"
          title="John Bachmann (Newsmax) - Brandon Judd National Border Patrol Council, 'Desantis fights to protect FL from Biden's border crisis'"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “We don’t need manpower nor technology, we need policy to control the
        border, secure, and go after criminal business. Without proper policy,
        this is going to continue. We know what needs to be done to solve the
        problem and we know what to do to do that, close border policies.” I
        don’t see any crime in immigration.
        <br />
        <br />
        "Biden called trump racist," TRUMP IS RACIST, his racism is the
        secondary cause of the labor shortage, behind cohort size and financial
        dead weight (laborless-demand, lender/landlord/insurer work deficit by
        invoice, expiring claims, implausible landlord use, repo cycle kept down
        payments, all breaking third party beneficiary donee claimable grounds
        to loiter and launder on the same goods for a higher and monopsony rate,
        co-signing their employers and customers compounding interest impossibly
        derived from the seller nor the third parties unless every debtor is
        right, never is. just simply 1-level-board max royalty contracts).
        <br />
        <br />
        "Republicans voice of reason and decency on this committee," Amanda
        Devine. "Not tested, not vaccinated, not even tested, and foreigners
        have better rights and now New Yorkers are allowing them to vote! 6m
        'illegal'"
        <br />
        <br />
        “Many people like the union because they don’t have to work very hard
        and still get paid,” Maria Ryan.
        <br />
        <br />
        “The teachers’ movement is a marxist movement. The first move is to
        destroy the education system.” The admin of union is to destroy
        education to ban finance?
        <br />
        <br />
        “Biden told media to show good economic figures, so they started
        reporting on certain gas stations,” Maria Ryan. "We are the USA, we
        should have the best education system in america."
        <h2>free rider mutable trade secrets. let them work</h2>
        "We need system to teach social things, like run a checkbook, cook,
        clean, take care of themselves, science and math."
        <br />
        <br />
        Ask-to-bid happens when supplier has demand propensity, based on
        labor-competing and -boosting supply. The disparity is so large between
        supply and demand now, however, insofarthat dead-weight entrenched
        suppliers can wait, yet demand can no longer negotiate.
        <h2>
          “[Withholding oil on free-rider-mutable, collectively-flaccid,
          federally-cornered lands] to make{space}
          <a href="https://magnate.company">electric</a>
          {space}more appealing. ...Inflating currency makes inflation.”
          Rental-income isn't income? Bonds aren't assets? Homes aren't meant to
          be owned outright?
        </h2>
        Inflation overwhelms wages, “in the long term,” by profits from lender
        work deficit, and wages move in the first place because guys like Grover
        Nordquist doesn’t account for intermediate-labor, homes nor bonds in
        inflation nor gini, unless in class solution precedence malfeasance
        court against the better angels in third party beneficiary donee
        claimable cash:debt*income thru history.
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F108986904353225%2Fvideos%2F4404002109665977%2F&show_text=true&width=220&t=0"
          }
          float="right"
          title="https://fb.watch/8vc_WNxnzq/"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “Tell me more about price elasticity.” Bo Snerdley later says,
        <br />
        “She is just going to send the money so they can have abortions wherever
        they find them.” Prices would drop if money outside the market didn’t
        prevent it. Not a conservative, Marxist nor Pareto if you don’t believe
        in that ask-to-bid principle, of useless non-labor
        (flaccid-rentier-profiteer) borne-demand.
        <br />
        <br />
        Most disability is 65+ and also half continuing claims 2.8m go to them.
        We are working a lot more than when you were a kid. 6m/40m vs 6m/20m
        unemployed, 5x hours per worker and 2x workers per person, which amounts
        to 10x hours to home wince 1970 and doubling of hours per home,
        population growth I will give only 20% of the factor, since before 1913,
        it was nearly constant, save amortized principle malfeasance, collective
        flaccid loss, expiring claim false bid pools, or monopsony with free
        rider mutable tax outside sewage police lawsuit multiple of 12 industry
        various jury duress for minimal viable product as in microeconomics, the
        basis for self-regulation, by Pareto, says infinite producers is perfect
        equilibrium, unfettered by taxation, reappropriating of labor equity,
        rent-seeking and laborless-demand.
        <br />
        <br />
        Mark Levin and Rich Valdez: "Inflation is when money is worth less -
        whenever the ask takes more dollars to buy the same thing, from the the
        currency of the depository, and the share-split as stasis, coming off
        the gold standard, then silver with Nixon. Inflation by
        intermediate-labor, home or bonded-asset and bonds in 'principle,'
        albeit garnered by compounding fractional reserve/third party
        beneficiary donee claimable in contract, required the full faith and
        credit of the U.S. up to the beholdence to those owed the debt, nothing
        to do with printing money.”
        <h2>
          But $32/day/person is 2/3 private and velocity of m2 minus gdp divided
          by m2 minus CurrencyComponentOfM1 is 1.1/year, that is checking.
        </h2>
        Fiduciary Ryan Payne: "Bond buying by the Fed," is NOT ONLY third party
        beneficiary donee claimable transaction, but outside of article 4 outlay
        and receipt scope for share-split and free rider mutable tax and debt
        servicing.
        <br />
        <br />
        “There is never enough money to pay for theory, and{space}
        <a href="https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch02.htm">
          Marxism
        </a>
        &nbps;is an unachievable, lousy idea. Not reality, stealing from Hagel,
        Rousseau, material-based, in a form of genocide and the latest
        American-form. Inflation doesn’t come from matter of routine, but by not
        following the laws of economics, that are like those of physics. If you
        don’t, things fall. If you think about it, it is pretty simple. You can
        be a janitor or slip and fall lawyer and understand that creating
        massive debt you are unable to pay, with low interest rates, is so that
        consumer side nor producer side notice. Now apparent with the highest
        inflation rate in 40 years, and it was created by Biden and his
        administration.”
        <br />
        <br />
        "Marx predicted a period of despotism." That is the foreclosure induced
        by the counterfeiter promised from the loitering launderer’s consumers
        and employers.
        <h2>
          <span
            style={{
              fontSize: "9px"
            }}
          >
            1-level-board max-profit-royalty stops third party beneficiary donee
            claimable, "toilet"
          </span>
          <br />
          repo cycle kept down payments, "you can fail and succeed again!"
        </h2>
        life is Constitutionally protection and right, in preamble, spoken in
        broad terms, lo inherent in being human as standing of constitution, of
        course.
        <br />
        <br />
        livlihood, lest mandate testing if done for covid if that wasn't
        basis-vs-excess-rate-fraud, can trump life Constitutionally protected
        protection and right, in preamble, spoken in broad terms. Criminal when
        finance (invoices, expiring claims, implausible landlord use, repo cycle
        kept down payments) is out, until then duress is cause for acquittal.
        Lo, jury duty currently removes you when you're concerned with method
        and level of remediation at anyone else's costs, or hesitance to jail
        anyone at all.
        <br />
        <br />
        Why would you even allow contracts insofarthat if they fail, they keep
        down payments third party beneficiary donee claimable
        loitered-collateral laundered from customers and employers for that
        self-immutable, yet mitigatable, failure?
        <h2>
          Your tax money 60% free rider mutable 1/4 1/4 1/4 premium pentagon
          pension 40% debt spending 1/3 of $32/day/p in total debt, that’s third
          party beneficiary donee claimable, and I’m here to collect.
        </h2>
        Right-winger in Yahoo Finance complains about inflation and lower asset
        prices, like it is transitory and linked. (The term Stephen Moore is
        looking for is, "extinguishable," not the most common, shortest and
        historical use of "transitory" as a "transitive-property")
        <br />
        <br />
        Free enterprise system is not third party beneficiary donee claimable,
        repo cycle kept down payments isn’t plausible deniability nor business.
        <br />
        Why would you want to put yourself in danger, that doesn’t mean you are
        soft. 1937 social security was forced, I would probably be skeptical of
        WWII.
        <br />
        “All these free programs, no one has to work, no one is going to work
        again.”
        <br />
        You want to make more money instead of amortize principle. Trump
        cancelling means bailout with saver money, stop calling it tax payer
        money with 40% debt spending and velocity of m2 minus gdp divided by m2
        minus currencyComponentOfM1 at 1.1 times a year. Can’t even say it would
        take 44 years to pay off public and private debt, with current income
        paying it down. Meanwhile you on the right & top-left keep down payments
        upon collateral repossession or court-price-fix estimates as you do with
        third party beneficiary donee claimable.
        <br />
        <br />
        $32/day/p is not free, gov is 1/3 of the burden on what your collective
        corporate flaccid loss buys in intermediate r&d material and labor
        monopsony. My household home contractor company just lost to nj consumer
        protection law as option to buy on estimate. We can’t
        <h2>certify my cock bob payne</h2>
        Ry: "being a certified-fiduciary means we lose certification of being a
        fiduciary if we lose you money."
        <br />
        <br />
        <hr ref={this.levin} />
        “Other crackhead-pillow-guys, you have to get a second mortgage to buy
        them.”
        <br />
        <br />
        "You invested in a bunch of assets and now your money is not worth
        crap," complains Mark Levin.
        <br />
        <br />
        "...we are going to have less r&d if this bill passes." Well, wouldn't
        labor pick up the r&d intermediate material and labor monopsony slack?
        <br />
        <br />
        "Isn't that gov controlled socialism? That's what it sounds like to me."
        <br />
        "That is exactly what it is. Right now we are vibrant, and government
        comes in out of fear because we are making money on it."
        <br />
        "Woke socialism under Biden." fda dir thomas philipson.
        <h2>
          <span style={{ fontSize: "9px" }}>market-communism on the right</span>
          <br />
          savings-account work deficit: not derived from labor
        </h2>
        "Price controls make better health more expensive," only if there is IP
        monopsony (intermediate material and labor) and if the target-margin
        cuts into costs, otherwise, margin controls work. Bipartisans wish to
        nationalize monopolies anyway, for debt service, rent-seeking
        government-gentrification. Libertarians don't care about monopsony.
        Savers do.
        <br />
        Margin-targeting R&D loss is for only the existing business. You aren’t
        counting the transitive property of that intermediate R&D for new
        business from labor, with, otherwise, no time to invent.
        <br />"<a href="https://teapharmacy.com">Clinical trials</a>
        {space}is the largest r&d expenditure."
        <br />
        <br />
        Poofitability not withheld for flaccid collective loss, is income
        <br />
        <br />
        Expiring claims false bid pools are useless price-inelasticity
        bid-to-ask
        <br />
        <br />
        Takes a while to think of this, 10x more than writing it.
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1242ebt5ukDVeCIt6c0GVC4BzhPqddSiF/preview"
          }
          float="left"
          title="American Agenda (Newsmax) - J. Borroughs (forget his name) on the benefits of intermediate-labor inflation"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “People are growing their savings accounts off of this, but the GREATEST
        issue is the government encroachment,”
        <h2>
          If a congressperson has holdings in relevant bbb ppp ccc contractors
          existing-biz parents, they must abstain, espectially if they didn't
          get a even a plural majority of eligible+desisting, and a simple
          majority if turnout. Emulated by default, "no," lest holdings-abstain
          (no-count)
        </h2>
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1VRm43GWAtuLAQ19uAXDFX1nkz1Vf7yuD/preview"
          }
          float="right"
          title="American Agenda (Newsmax) - Joe Tobacco on public holdings"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “The largest holding per Senator is Pfizer,” 13d-retail anon uuid now!
        <br />
        <br />
        “My job as a parent is to prevent disease, illness and death, these
        vaccines is the best way to do that. Keeping kids out of schools is bad
        for 'mental health.' Schools are closed because of lack of vaccinations
        and lack of teachers,”
        <br />
        <br />
        Dr. Rainey, paralytic polio matches multiple sclerosis and smallpox was
        lessened by 1775- sewage/nutrition improvements, and cartoon vivo nor
        electron microscope snapshot with bacteria or mitosis of already
        infected spread isn't proof otherwise.
        <h2>
          you aren't counting{space}
          <a href="https://www.fda.gov/media/144245/download#page=42">
            all cases
          </a>
          , just one artifact-byproduct of many by the same cause,
          bacterial-infection. If it, "requires cell to replicate," its taxonomy
          is only a cell. Are you saying it is an evolutionary trait? To do the
          math with it being dead would be to say it is exclusively
          byproduct-prevalence and warning-mechanism of bacterial-infection,
          antibodies to stop blood clotting but not infection of prevalence
          without transmission. prevalence does not transmission-cause make.
        </h2>
        after 2008, home-contractor household, I ventured to understand{space}
        <a href="https://youtu.be/W-Vv1vysGzE">market history and propoganda</a>
        , writing to admissions my desire to look into Chinese film. First time
        I realized economics JHU favors collective flaccid loss to per hour ease
        of life, I screamed at the sky. It was a roller coaster of understanding
        thinking dollars were made by G-d, realizing dissolution of the dollar
        IS public-park-deeds. only third party beneficiary donee claimable by
        invoice, expiring claims, implausible landlord use & repo cycle kept
        down payments is playing AS G-d. I had realized a significant majority
        of sheep had been herded by the false prophets, potentially now coming
        for appeasment/atonement in 2020-2030.
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1p4Z-TTH_FgSrZucTUuhFXcRZ7w60--MD/preview"
          }
          float="right"
          title="GBNews - Thomas Jefferson statue"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “Oxford belongs to its residents’” actually it belongs to the dollar
        owners
        <br />
        <br />
        Statute of limitations as cause for acquittal is admittance of
        exoneration on class precedence malfeasance.
        <h2>every episode is rational, criminal or not.</h2>
        “There wasn’t something right, no signs of drugs or alcohol, did have
        episode in college, received treatment, come off drugs, and continue his
        life,”
        <h2>
          11/12 cannot see unexhibitable opinion character witness as evidence.
        </h2>
        "Why is it that 'mental health crises' leads often time to death
        sentence for afros," even George Floyd feeling claustrophobic causing
        carfacing is exemplary of this, a rational reaction from drug induced
        psychosis not far from reality, scope of vehicle scary for something
        Jamie Dimon and Walgreens gets away with? I can't concentrate?
        <br />
        <br />
        “Consumers change buying habits and that changed demand side, changes
        industry to industry has allowed monopolies to price gouge, talk about
        inflation. ...Suppliers haven’t only kept costs the same and rise
        prices. …Long term we need an economy more competitive, and that means
        enforcing the antitrust laws. …Dems are spending a lot of time trying to
        get this huge bill together, first get it done, then talk about and make
        impact on American people, childcare turn on as quickly as possible, so
        parents struggling to pay for childcare, when we deliver, then we can
        talk about it.”
        <br />
        <br />
        “This short period of time where there is a real crunch for workers. We
        need workers opportunity to unionize, against crushing of opportunity to
        collective bargaining. …Without extension, people are going to be
        squeezed, not ready to begin making payments for student loan. That is
        money that goes through the economy and through the stores. President
        can cancel student loan debt. all you need to do is take out a pen and
        pencil, and get it done. We are talking about how to make people’s lives
        better, mommas who need childcare, fight climate change, and get
        prescription drugs.”
        <br />
        <br />
        Artifact is, not exclusive, but necessary and sufficient
        prevalence/indication by incidence, in some cases, in a vacuum with all
        other necesary incredients for a matching outcome.
        {/**reflective would be match of another plane (photography) */}
        <br />
        "Everyone is making more money since the pandemic started," that is
        intermediate-labor.
        <br />
        <h2>Saver Party will retire you,' I'm turning gdp upside-down!</h2>
        per hour watching eachothers' kids is...
        <br />
        <br />
        “Her economic viability is at stake, a way to keep her as a dependent,”
        or does the source of self-harm dependence make them dependent? Without
        finance (invoices, expiring claims, implausible landlord use, repo cycle
        kept down payments), there is no need to take care for more than
        yourself
        <br />
        <br />
        ppp ccc bbb trust building existing-biz parent contractors
        <br />
        <br />
        GDP prices*hours is upside down productivity
        <br />
        <br />
        "Elon Musk is, 'thinking of,' leaving his jobs and becoming an
        influencer, the world's richest man tweeted," rich based on last trade
        valuation, that which aren't court backed prices, and in debt by bonds
        that are, by third party beneficiary donee claimable malfeasance, nor
        are assets counted in inflation nor gini, like we're never meant to own
        a home nor IP outright. By the way, intermediate-labor is neither, to
        the same meaning of intentional force majeure & servitude and laundering
        third party beneficiary donee claimable, kept down payments upon
        repo-cycle.
        <h2>
          <span style={{ fontSize: "9px" }}>
            why not count private debt, hypocrites? $32/day/p new debt public
            and private, repo cycle kept down payments borrowers loitering third
            party beneficiary donee claimable. Only way out cash:debt*income
            thru history.
          </span>
          <br />
          we are replacing debt with max-profit-royalty of 1-level-boards
          <br />
          <span style={{ fontSize: "9px" }}>
            No corporate collective flaccid loss, nationalized bridge tolls,
            unmarginalized targets of price and quality of networks for the very
            microeconomic self-regulation reasoning of perfect-equillibrium
            necessarily exhibiting infinite produces to that outlays are
            immediate to demand that is exclusively labor or escrow to
            collective bargain asap before, flaccid loss.
          </span>
        </h2>
        40% debt spend isn't tax payer money. $.18/day/p new cash (park deeds
        share split), free rider mutable tax is also pure inflation,
        rent-seekable-gentrification and intermediate material & labor
        monopsony, $32/day/p public and private new debt, $8/day/p M2...
        expiring claims false bid pools is also theft (third party beneficiary
        donee claimable)
        <br />
        <br />
        Why, are social security and wall st in cahoots the reason for two-party
        diachotamy?
        <br />
        <br />
        Lenders don’t do anything except raise bid for monopsony, of same
        intermediate material & labor for durable good, which is excluded from
        inflation and gini.
        <br />
        <br />
        "labor shortage at hospitals," Elize Stephanic. more accurately working
        age shortage, old people need to get back to work, 20x/person rental
        income, half disability and continuing claims 65+? 2015- 75+ 1.2m/yr+,
        get over it!
        <br />
        <br />
        GDP/p before 1913 was nearly constant, save
        <br />
        Gini nor inflation counts intermediate-labor, options on estimates
        "consumer law," expiring claims invoices kept down payment repo and
        impalusible landlord use, bonds (7.5%/yr+) nor home prices (5%/yr+)
        <br />
        <br />
        <hr ref={this.options} />
        <Cable
          style={{ width: "100%", height: "400px", maxHeight: "50vw" }}
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1mO4TCLFhGd22hvcNulLFDoXbTeAXfgRS/preview"
          }
          float="right"
          title="Ron Paul Liberty Report - inflation, mandates and public debt"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <h2>
          Libertarians love their corporate collective flaccid loss -38% $4t/yr
          40% debt spend, the rest{space}
          <a href="https://www.ssa.gov/OACT/TRSUM/2020/tr20summary.pdf#page=11">
            Medicare, Pension and SSA general revenue asset sales 50%, 19%
            expiring premiums claimed
          </a>
          .
        </h2>
        "...#1 duty evidently is to maintain stock market," ask price, because
        13d-retail anon uuid discrepancy like shooting fish in a barrel with
        pattern day trading rules.
        <br />
        <br />
        Repo cycle kept down payments still third party beneficiary donee
        claimable even without fractional reserve doesn't stop fractional
        reserve in contract{space}
        <span role="img" aria-label="bottom-left squirrel white-circle">
          ️↙🐿⚪️
        </span>
        <br />
        <br />
        So let's cap rent by 5 unit or 30 days not price, to get elderly
        20x/person per millennial off
        rental-income/the-landlord-work-deficit-dole
        <br />
        <br />
        <TwitterTweetEmbed
          style={{ width: "300px", float: "right" }}
          tweetId="1411470492834439171"
        />
        Treasury shares not with standing outstanding in price to equity, except
        in court. Assets aren't price fixed but the bonds & assets as collateral
        loitering by borrowers public & private $32/day/p
        <br />
        <br />
        "...See those employment numbers? The best in years," Jim cramer, if
        labor is now busy-work, and it is, and is part of inflation, and it is.
        Kirk wants family-formation at any cost. If you care about Walmart
        workers, you would want employment to go down in wasteful areas of
        collective flaccid loss of banked CarShield mechanic hours expiring
        claims and court price fixed third party beneficiary donee claimable
        options on estimates, invoices and debt for monopsony and
        no-greater-intermediate goods material and labor, OR GOES TO PAY LENDER
        LANDLORD INSURER WORK DEFICIT, which it does! "...We have all seen the
        help wanted signs, they are using cash, not credit, in a 1920 style!"
        <h2>
          "dnc politicians are rnc voters"
          <br />
          <span style={{ fontSize: "9px" }}>
            Racism: the cause of the{space}
            <a href="https://nationalsecuritycasino.com/trump">
              labor shortage
            </a>
            , but only partially-after working age shortage from boomer boom
            1.2m/yr+ 2015- 75+ (not accounted for in "excess" year-to-year rates
            of event, unfixed for base-cause)
          </span>
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/18AE-JxXtVeZ20BFz-G4GnfOtZY1L34bU/preview"
            }
            float="left"
            title="American Agenda (Newsmax) - Stephen Moore labor market and inflation, ignoring the private and public invoices, expiring claims, implausible landlord use & repo-cycle-kept-down-payment influence in the work deficit as third party beneficiary donee claimables"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          corporate and free rider mutable tax collective flaccid loss
        </h2>
        "...nurses, those jobs are out there,{space}
        <a href="https://fred.stlouisfed.org/graph/?g=H5XB">labor market</a>
        {space}is strong in that regard," says Stephen Moore, but it is not
        strong as per hour productivity (price-deflation of assets, inflation
        and intermediate-labor).
        <br />
        <br />
        “They have been buying all kinds of debt they shouldn’t have been
        buying,”
        <br />
        <br />
        "...when letting inflation go like this, reigning it back in can be
        really painful."
        <br />
        <br />
        "Only way to stop it is to raise interest rates by 20%," well you can
        reverse the repo-cycle kept-down-payments by cash:debt*income thru
        history then truncated sales tax free rider immutable sewage police
        lawsuits and multiple of 11/12 various industry jury designation,
        minimal viable product duress permit, conviction or desistation, with
        exhibitable facts without character witness as exhibitable evidence, nor
        isolated jurors with no prior opinion, wood-headed.
        <br />
        <br />
        “They should have stopped buying bonds like 6 months ago,” Larry Kudlow,
        Former NEC Director, “I would like it if they raise .5%.” for compound
        interest, of course, "market [prices] would like that. Markets are doing
        very well because profits, inflation is good for that in the short run,
        but not when wages catch up with serfdom costs.” So profits by debt is a
        good thing? Is broadly useless price-inelasticity bid-to-ask.
        <br />
        <br />
        <h2>
          labor shortage is cohort size shortage, wage inflation follows
          inflation, but the former should be counted as an intermediate good in
          inflation, labor is not meant to work alone or work for Republicans
          forever. Supply and Demand is supposed to be exclusively labor, not
          outlays withheld for collective corporate flaccid loss.
        </h2>
        workfare: from $32/day/p from private banking fractional reserve
        lending, then force people to work?
        <br />
        <br />
        Republicans (Ron Johnson and Larry Kudlow): " People are encouraged not
        to work, there needs to be work requirements for foodstamps, nutrition,
        and farm stuff.
        <a href="https://fred.stlouisfed.org/graph/?g=H5XB">
          We are paying people not to work
        </a>
        , which means we are paying people not to grow the economy, we want to
        help people who cannot help themselves."
        <br />
        <br />
        You can't force me to work for a bank that is third party beneficiary
        donee claimable, I am an injured bartender, you also cannot assume I'll
        be hired doing other work, evidently so after thousands of remote job
        applications. PAY ME MY MONEY. most disability are elderly and half
        continuing claims (2.8m/170m employed, 160m without claims).
        <br />
        <br />
        “Woke ideology,” is assumption, or having to mention it and give the
        issue credence.
        <br />
        “The guy who lit the $1.2m appraised (but free before paid if grew
        naturally, except oxygen loss) setting of fire, needs to be evaluated.”
        <br />
        Character witness evidence, just use the facts of the case, don’t bring
        in some Freudian nut
        <br />
        <br />
        We can ween off net loss profit per incarceration bonds with truncagted
        sales tax free rider immutable sewage police lawsuits geohash/mo paytech
        to accounting software and Congress, not itemized.
        <br />
        <br />
        In 2013 I had a choice: fail out or do the youtube random kissing girl
        challenge to take leave, as I imagined taking leave during academic
        probation would allow the school to decide, without protection of health
        precedence. I abused the mental health system for more time on tests and
        now disability, amazingly. I was applying for the hole in my leg but
        since my mom has collateralized loans they want to price-fix and make
        her payee. This is way beyond article 4 and only abetts finance
        (invoices, expiring claims, implausible landlord use, repo-cycle
        kept-down-payments). I disagree that gdp is productive, but now the
        author of that which I disagree sums my insurance assessment as
        affirmatively a net-loss, that which most recently was used to claim I
        have grandiose thoughts. The diagnostician does have
        industry-precedence-interest in such a claim, however, being paid by
        non-rollover insurance herself.
        <br />
        <br />
        "Democrats own this mess," Mitch McConnell, GOP spent more and Trump
        more than that. Drain the swamp my ass. debt is more private, you
        hypocrite
        <br />
        <br />
        Schumer and Levin are pro-insurance, but the jury finds third party
        beneficiary donee claimable is ground to stop expiring claims false bid
        pools laundered and loitered
        <br />
        <br />
        "'Do you agree with Menendez that President Biden should kind of wipe
        the slate clean?'" nj 101.5 Deminski & Doyle
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/11qPBdPnNLC4Skzzm6n36cbzOOdNhd2pW/preview"
          }
          float="right"
          title="Cortez & Pelegrino (Newsmax) - Elize Stefanik"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “The proof is in the polling,” while she references only ideological
        duress candidates and ignores the majority of voters behind eligible and
        detesting,
        <br />
        “Republicans will support energy production,” by rent seeking pipelines
        instead of G-D FORBID margin-targeting "networks:" market of markets.
        <h2>
          Bonds not counted in gini nor inflation but is asset price fixed, and
          homes.
        </h2>
        There is money on both political-sides,”
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1__IwzWhGwkvPTMxJPmKOsts5in89PQ9d/preview"
          }
          float="left"
          title="Stinchfield (Newsmax) - Kristin Tate, 'Liberal Invasion of Red State America'"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <a href="https://www.arc.gov/staff/federal-co-chair-gayle-conelly-manchin/">
          Appalachian Regional Commission
        </a>
        {space}rent seeking free rider mutable maintainable
        feeable/operating-costable, Gov gentrification monopsony is mere price
        inflation unless large enough collective bargain without estimating and
        flaccid collective loss
        <br />
        <br />
        “Invest in kids,” let them have work, don’t monopsonize and trade secret
        education
        <br />
        <br />
        $12k/year/p debt, $3k/year/p bond m2, $64/year/p checking
        currencyComponentOfM1
        <br />
        $32/day/p debt, $8/day/p bonds, $.18/day/p checking
        CurrencyComponentOfM1;
        <br />
        $6k/yr/p and $6k/p total; $12k/yr+, $32/day+, $200k total debt per
        person. $3k/yr+, $8/day+, $60k total m2 per person. $64/yr+, $.18/day+,
        $6k total checking CurrencyComponentOfM1 per person
        <br />
        “Invest in kids,” let them have work, don’t monopsonize and trade secret
        education
        <br />
        <br />
        “These progressive people want:”
        <br />
        people don't want to work today because there isn't enough people, not
        that people don't want to work, though why would you work against
        $32/day debt? that's retarded
        <h2>ccc bbb ppp trust-building parent contractor existing-biz</h2>
        60%{space}
        <span style={{ backgroundColor: "black", color: "white" }}>
          Free rider mutable
        </span>
        {space}from outside the market inflationary tax 1/4 1/4 1/4 premium
        pentagon pensions 40% debt spending{space}
        <a href="https://law.justia.com/cases/california/supreme-court/3d/11/394.html">
          Third party beneficiary donee claimable
        </a>
        {space}is useless price inelasticity and r&d monopsony by private and
        public
        <br />
        <br />
        Buying other countries’ dollar-parks as they print is collusion, just
        let Ukraine buy from "our" contractors.
        <br />
        <h2>
          Looking at debt valued thru m2's withdrawalable value, accrued by
          laundered third party beneficiary donee claimable
        </h2>
        $1/32/3000(
        <a href="https://vaults.biz">
          compound laundered and loitered goods, materials and labor estimates
          price-fixed by U.S. government
        </a>
        )/day (or $1k/3k/12k/year) pulled out for social security, half disabled
        and continuing claims, 20x/person rental-income.
        <br />
        <Cable
          style={{
            width: "300px",
            height: "200px"
          }}
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1asRoUeiEAmXwmb3mJaJ2by5IEM4DbN6p/preview"
          }
          float="right"
          title="Eric Bolling (Newsmax) - 'Ukriane is not our perogative[, let Russia nationalize their supply chain as colony],"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <h2>
          repo cycle kept down payment force majeur third party beneficiary
          donee claimable lender, landlord, insurer work deficit (implausible
          landlord use, expiring claims false bid pools)
        </h2>
        Enslavement or colonialization in foreign countries is our prerogative
        for comparative advantage tech advancement and war crime, making article
        4 relevant. Economic gains would be national security issue, if it helps
        (price-deflation-per-hour, no expiring claims false bid pools,
        implausible landlord use) taxing for free rider mutable outside the
        market, hardly ever is unless the end product is a durable good without
        maintenance feeable/operation-costable, neither is plundering for such
        comparative advantage tech advancement, but also nuclear dilemma.
        <br />
        <br />
        <a href="https://github.com/NickCarducci/mastercard-backbank/tree/main/src">
          credit
        </a>
        {space}is theft/<a href="https://thumbprint.us/payments">haram</a>,
        gdp/down 11/1 is not a job
        <br />
        <br />
        “‘I found out how much it is going to cost,’ ‘then I found us the
        perfect mortgage,’ ‘then I found Raydon.”
        <br />
        <br />
        <h2>can't even get a pot to piss in!</h2>
        <Cable
          style={{
            width: "300px",
            height: "200px"
          }}
          onError={handleScollImgError}
          src={
            this.state.nofred
              ? ""
              : "https://drive.google.com/file/d/1Lz5mthHFl2_qR8TVP3JdtVzAQe3P6LGp/preview"
          }
          float="right"
          title="GBNews - 'My Son Hunter' and 'the good parts of crack'"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “If Twitter can stop an article, they can stop your movie." To which
        Lawrence resplies, “Oh, they really are out to get me, but I strive on,"
        "Well you don’t claim infallibility like your critics to.”
        <br />
        <br />
        omg what a right pussy, grovelling to molloch, the trade secret king,
        claiming "plausible deniability" of knowledge as the right and top left
        often do.
        <h2>
          Amanda Devine:{space}
          <span style={{ textDecoration: "underline" }}>
            Laptop(s) from Hell
          </span>
        </h2>
        “Grips of powerful addiction, wouldn’t wish that upon your worst enemy.
        Wouldn't show up to nor pay for meetings, alimony nor bills on time,
        that which ost of us have to go thru, but he loved to go on benders. He
        spoke of a, 'drug trial,' ...ordered Dom Perigone on his tab, kept
        having to go to Apple store to buy new supplies, not a surprise he,
        ‘lost,’ 3 laptops.” Damn, why don't you just marry him
        <h2>
          <a href="https://humanharvest.info/jury-science">Nice</a>,
          libertarians
          <br />
          White Marxists, more like Taupe
          <br />
          <Cable
            style={{
              width: "300px",
              height: "200px"
            }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/18YO4TTjqmAKroh4uhnmOYKTIxrkGt_ps/preview"
            }
            float="left"
            title="Chris Salcedo (Newsmax) - NY Hospitol fires 100 unvaxxed employees who claim religious exemption"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          finite producers is not sufficient for perfect equillibrium of
          demand-exclusivity-of-labor, or outlaid t-0 (time zero)
        </h2>
        "Virus don't want to{space}
        <a href="https://www.genome.gov/genetics-glossary/Virus#:~:text=Viruses%20must%20infect%20cells%20and,been%20found%20everywhere%20on%20Earth.">
          kill
        </a>
        {space}you, they want to{space}
        <a href="https://youtu.be/Weqb9KrQ-TU?t=21">survive</a>. In 1918, my
        grandfather died of starvation at 35,"
        <br />
        “Stingers anti aircraft and anti boat weaponry,” are we exclusive
        providers?
        <br />
        “The IRC are going to ignore 5m killed with covid,” you tested for that,
        doesn’t mean it was the cause…
        <h3>
          <a href="https://www.scientificamerican.com/article/are-viruses-alive-2004/">
            Tim Heidecker Blasts Joe Rogan
          </a>
        </h3>
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/17vIOS1lC8FEteH8LEbFTPvKL3T5FaW4q/preview"
          }
          float="right"
          title="Spicer & co (Newsmax) - Kimmick and Waltz on China intermediate supply-demand && bond work deficit"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <h2>
          save the supply chain: don't be racist{space}
          <span style={{ fontSize: "14px" }}>teapharmacy.party</span>
        </h2>
        “We need to get China out of the DOD, it is{space}
        <a href="https://constitutioncenter.org/interactive-constitution/article/article-iii#article-section-3">
          long
        </a>
        {space}overdue,” Kimmick
        <br />
        <a
          style={{
            shapeOutside: "rect()",
            float: "left",
            width: "max-content",
            padding: "0px 10px",
            fontSize: "20px",
            fontFamily: "'Pacifico', sans-serif",
            color: "rgb(230,230,255)",
            backgroundColor: "rgb(32, 22, 11)"
          }}
          href="https://humanharvest.info"
        >
          humanharvest.info
        </a>
        “1/4 fraud childcare credit,” Rand Paul
        <br />
        “Wishlist of big government socialism, they give free stuff, but it
        costs in inflation, fed spends and money raises inflation, then Biden
        says borrowing gets rid of inflation.
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1zDBEPkWEsS7raUnGxsznWYVHoP62suFR/preview"
          }
          float="left"
          title="Save the Nation (Newsmax) - 'Texas leads the charge to secure the southern border'"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “They are in stash houses, they are being mistreated,”
        <br />
        <br />
        “America first, crt, border, woke government which we believe this bill
        is,” but comparative advantage tech advantage loss…
        <br />
        “Safe from crime, drugs, radical ideologies like crt, Soros DA.”
        <br />
        C for renewing American, russ voght
        <br />
        <br />
        ...They tried to squelch our country, but capitalism survived, we need
        to get these people out of our business and church lives. these bylaws
        are based on whims."
        <br />
        <br />
        spic: “Socialists follow their own laws, even if they are breaking the
        very laws they are putting forward,” Chris Salcedo.
        <br />
        “Socialists can’t raise the debt ceiling, even if we need it for the
        faith of our dollar-park-land without other income or utility intrinsic
        value,”
        <br />
        <br />
        you are going tojail you fat grocer; how can you get people to take on
        debt? give them some of it now.
        <br />
        <span style={{ fontSize: "9px" }}>
          <a href="https://fred.stlouisfed.org/graph/?g=JE8F">compound</a>
          {space}starting at{space}
          <a href="https://fred.stlouisfed.org/graph/?g=JEcT">zero</a>, begets
          more investment required. repo-cycle corrects unless the fractional
          reserve park deeds bails out libertarians.
          <br />
          “Tapering off bond buying of the outstanding bonds doesn’t raise
          rates,” John Catsimitidis, "You at least have to get the froth out,"
          like correct collateral to debt-inelasticity of bid-to-ask upon third
          party beneficiary donee claimable. cash:debt*income thru hisotry is
          only way out, not bailout/new deal nor cancel for gini ex bond
          (7.5%/yr+) and home (5%/yr+), gdp/p before 1913 nearly constant lest
          private property not inflation meant to be serfs but repo-cycle
          kept-down-payments price-fixed by courts, 1/2 mortgages
        </span>
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1K0Vyk7e26LevjFJugHH8bMhjPlzlQYEN/preview"
          }
          float="left"
          title=""
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “'Police presence, wave to criminals'”
        <br />
        Open source design is like Rudy taking reverse amortization instead of
        cancel nor bailout.
        <br />
        On radio, as Krugman says it is a net loss, the lock and key of my
        prisoners’ dilemma beforehand, abetting invoices and useless price
        inelasticity laundered from savers of the currency, third party
        beneficiary being a matter of fact field exhibit, as protistology is in
        taxonomy of virus being exclusively cell-borne as well as
        reproductive/reflective, as complexity in nucleus, Golgi apparatus and
        mitochondria.
        <Cable
          style={{ height: "100px" }}
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/17pE-RBm4UafsManNe7ryYGxfAXb_a0ub/preview"
          }
          float="right"
          title=""
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <h2>
          If at any time the fed is not funded, the full faith and credit is at
          stake. the military will enforce
          [third-party-beneficiary-donee-claimable repo-cycle kept-down-payment
          intent deDUCES]." - John Gizzi (Third party beneficiary force majeure
          oohhhh it's about consent)
          <br />
          <span
            style={{
              fontSize: "18px"
            }}
          >
            “Cutting a deal over the debt ceiling,” even a tiny morsel of the
            usual $4t/yr free rider mutable tax and 40% debt spending is pure
            price inflation
          </span>
        </h2>
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1cLLyItHh3EcQMup6habyRWqaGSLF9Y7t/preview"
          }
          float="right"
          title="2015 mortality projections, US Census Bureau 1.2m/yr+ standardized excess deaths by cohort, gain (75+)"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1GyfYlwufkHxtlaWiF-EPdB92TX0JgFmz/preview"
          }
          float="left"
          title="American Agenda (Newsmax) - Eric Bolling foreign affairs"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        Bipartisan support is simple majority plural minority coalition, virus
        is dead, needs cell to replicate, where first taxonomy? Is byproduct of
        bacterial infection, prevalence byproduct, warning mechanism or cause.
        <br />
        <br />
        “If China sends us another virus that{space}
        <a href="https://humanharvest.info">kills</a>
        {space}hundreds of thousands, then we need to be tactical, but ground
        war is stupid in this day and age,”
        <br />
        <br />
        rick grenell thinks utility can be owned
        <br />
        "let's get some jobs here," by busy-work and (design and discovery)
        IP-equity dilution is still retarded
        <br />
        <br />
        <a
          style={{
            shapeOutside: "rect()",
            float: "left",
            width: "max-content",
            padding: "0px 10px",
            fontSize: "20px",
            fontFamily: "'Pacifico', sans-serif",
            color: "rgb(230,230,255)",
            backgroundColor: "rgb(32, 22, 11)"
          }}
          href="https://2052.live"
        >
          2052.live
        </a>
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1Vv7DOGe4Et2rrjrShfKx6gS7j3YvSxEK/preview"
          }
          float="right"
          title="Rob Scmitt Tonight (Newsmax) - Nat Sec. Adv Jake Sullivan on 2 Russian-colony sanctions"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <h2>
          <span style={{ fontSize: "10px" }}>
            “Nice big present from the United States,” says Schmitt about Saver
            equity, sounding very
          </span>
          {space}national-market-communist. It’s only tech advanced comparative
          advantagable self harm, I tell you
        </h2>
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1Fb_gOstIhpX7CE6zdHMtO_9lXB2fwLFB/preview"
          }
          float="left"
          title="Rob Scmitt Tonight (Newsmax) - Morgan Ortagus on 2 Russian-colony sanctions"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        "We will never know the origin of covid, so the big takeaway is how
        hostile China is going to be against Taiwan. NATO is a military, a
        political organization; there needs to be a funding to go after these
        _."
        <br />
        <TwitterTweetEmbed
          style={{ width: "300px", float: "right" }}
          tweetId="1421858300979732480"
        />
        “Against medical advice{space}
        <a href="https://www.biblegateway.com/passage/?search=1%20John%202%3A22&version=KJV">
          religious
        </a>
        {space}or medical, here is your badge or here is[ your freedom],” Alan
        jackson firefighter crafted
        <br />
        <h2>
          no consent between{space}
          <a href="https://teapharmacy.party">
            wall st pharma cop v wall st pharma cop
          </a>
          {space}plural minority collusion; stay at home moms aren't my base
        </h2>
        <Cable
          style={{
            width: "100%",
            maxWidth: "400px"
          }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.youtube.com/embed/nKvUf7F4Xn4"
          }
          float="left"
          title="Dick Morris (77WABC) - Advisor to Clinton and Trump on greenhouse gases, WWII and Marxist anti-rentier, repo-cycle, and profit by estimates of labor and material, rather than demository so labor is exclusively demand."
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        Committing to mental institution instead of Trespass but while finance
        (repo-cycle kept-down payments, expiring claims, invoices, implausible
        landlord use) is excusable, is a product of racketeering enabled by a
        beyond article 4 state
        <br />
        <br />
        "we have a $30t debt we are working on here, and Biden is letting in
        3-400k/2mo? ...If somehow the Vatican can craft some message that
        injected some reality in Africa, the Middle East, Honduras, Cancun,
        machine guns, Mexicans cannot retrieve all of this, and if the economy
        collapses, there is going to be violence. Here."
        <br />
        <h2>
          Necessary, sufficient, but not exclusive: “not, not that” Precedence
          goes both ways
          <br />
          conviction, desistation or permit duress in mvp
        </h2>
        "Chaos, no social services, no cable, no 'No Spin News,'” just because
        it is monopoly doesn’t mean you have to nationalize network fees.
        <br />
        I’ll drown you if you do not appreciate third party beneficiary donee
        claimable
        <br />
        <br />
        “48% Trump, 47% Biden, 8% undecided of wall st Pharma cop vs wall st
        Pharma cop voters.
        <br />
        65% positive, 10% socialism GOP is good.
        <br />
        "Everyone gets the same power to the people share the land, Bernie
        Sanders isn’t sharing any land in cottage, younger Americans usually
        change,” if republicans are smart, they will export that. These are
        radical people, and most are not. ...Chicago is violent, but 37 shot 9
        kills 12-41 in two days. Um. So. It would be better, in the Chicago way,
        if they impeach Laurie Lightfoot, replaced with a 7-th grader, a 7th
        grader can do a better job. 'Are you teaching kids properly? We need to
        hold parents accountable.’ You can’t even hold criminals accountable.
        This woman is absurd! Cuomo wants everyone vaccinated, no
        ice-cream-Sunday without a vaxx passport. Eric Adams isn’t gonna do
        anything like this. Going out like B. Tweed. If DiBlasio was dictator,
        and you didn’t do what he wanted, he would hurt you.”
        <br />
        I’ll drown you if you do not appreciate third party beneficiary donee
        claimable.
        <br />
        <br />
        “80m human beings killed in WWII, greatest generation, greatest value
        system. I was raised in a greatest generation home. 80 years ago,
        today,” slighting 2015- 75+ 1.2m/yr+ as excess deaths age standardized
        cohort gains expected fraud pandemic. The{space}
        <a href="https://thumbprint.us/voting">election</a>
        {space}was stolen,{space}
        <a href="https://saverparty.xyz">saver money</a>
        {space}was stolen, and intermediate labor is stolen by estimates of
        expiring claims and r&d monopsony.
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1PI0Apr-PjbE27K9uCUTrTk7E4DAMK_nQ/preview"
          }
          float="right"
          title="Spicer & co (Newsmax) - Lindsay M Keith on needing a draft next planned attack, like a mob vig"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “We owe them a debt of gratitude. Freedom isn’t free,” actually,
        truncated sales tax has always been viable, so debt is also free rider
        mutable gentrification monopsony gerontocracy and lender work deficit,
        bitch. Learn how to delegate.
        <br />
        Cash:debt*income thru history upon third party beneficiary donee
        claimable or your head.
        <br />
        <br />
        Debt of gratitude, actually it is real debt we have to pay.
        <br />
        That we never actually can, not for 44 years somehow paying off debt
        with current income.
        <br />
        The amount of years it would take do do that, 1.1/yr being the velocity
        of CurrencyComponentOfM1 (gdp without bonds).
        <br />
        Mark Levin supporting 501c3 for dissolution to the state. Socialists are
        more conservative, not the self described market communist ones in bed
        with the nationalized bridge toll republicans.
        <br />
        Republicans think debt is a waste unless you are a lender, an apparent
        disregard for human life.
        <br />
        <br />
        "They'll look at all the variables, not just rates," Mark Levin says
        about lending and third party beneficiary donee claimable brought
        forward demand for the same intermediate material and labor estimates
        monopsony.
        <br />
        <br />
        <Cable
          style={{ height: "240px" }}
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1Er7CSDUJwlYYTuQvVkrzFwaO55i72jFq/preview"
          }
          float="left"
          title="GBNews - Nigel Farage on Pearl Harbor, '80 years later'"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “She was unarmed.” Do not give me money, took out a cash advance to
        short debt with the intention to instate the policy for third party
        beneficiary donee claimables cash:debt*income thru history. Lenders want
        to repo-cycle and keep-down-payments. They know it is impossible
        laundering of people with money, the loiterers’ consumers, employers and
        chorers.
        <br />
        <br />
        “If Pearl Harbor didn’t happen, there wouldn’t be D day, Normandy, free
        speech and rights today, for the Nazi wouldn’t have been defeated,” it
        was about debt, or blonde hair/blue eye or free speech?
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1ZzE9i9INvfW3a-SGRdMzpTIRZYhPLMVb/preview"
          }
          float="right"
          title="Spicer & co (Newsmax) - Mike Huckabee on needing a draft next planned attack, like a mob vig"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        You want me to fight for what? Your bonds and homes that don’t even
        count in inflation, like we are meant to be serf? I don’t want to hear,
        “we aren’t perfect, but we are the best there is.” Reverse
        debt:cash*income thru history, cap rent at 5 units or 30 days (not
        price) and ban expiring claims for false bid pool third party
        beneficiary donee claimable of the surrenderers’ consumers and
        employers. I would sooner shoot you than fight for your ideals, Mike
        Huckabee, keeper of bonds and homes without inflation designation of
        such like feifdom intent in broad daylight. WE SLAUGHTERED COLONIALISTS.
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1qaX3Php-D23jEEUDrUKqv4zvr5qRnIdS/preview"
          }
          float="left"
          title="Spicer & co (Newsmax) - Marsha Blackburn on democracy"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “The world consensus doesn’t think Biden can lead on democracy,” “Trump
        front-ran blankets and food ready to eat, savers be damned.”
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/16yo_NC3tA1NpLSlG3TxxeWmwRcbNb6OF/preview"
          }
          float="right"
          title="Spicer & co (Newsmax) - Meredith MCGraw, National Security Correspondent, Politico on civil disobedience, democracy, consent and polling"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “So the next time there is civil disobedience, our leaders know how to
        respond appropriately,” Meredith McGraw National Security Correspondent,
        Politico Credit is haram, what else are you supposed to do when cops are
        malfeasant over third party beneficiary donee claimables Or naming a
        pandemic based on less than expected 2015- 75+ 1.2m/yr excess deaths age
        standardized by cohort gains, to trust-build ppp and certify an election
        with survey bias and magnetic data “audits,”
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1009XvG4fePjw7hrKOpG8WsG40c_GNU6y/preview"
          }
          float="left"
          title="Chris Salcedo (Newsmax) -  August Pfluger of texas racketeering for oil pipeline fees"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “You don’t want to be beholden to foreigners for energy,” what do you
        want
        <br />
        Security of private commerce is part of truncated sales tax sewage
        police lawsuits, you don’t need to rent-seek and government gentrify
        consumer surrogate operating costables, just target margin network fees
        and bridge tolls and quality monopsony by jury for duress within minimal
        viable product (varying industry multiple of 12)
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1UluGvWpLsnrRNHLJLMq2YuHn3xCHZ843/preview"
          }
          float="right"
          title="Chris Salcedo (Newsmax) - Carl Higbie on Democratic policies making less GDP, neither debt-less cops"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “Every time you get Democrat policies you get lower wealth,”
        non-depositary property is useless wealth
        <h2
          style={{
            width: "100%"
          }}
        >
          Economics teachers revel us into disparity.
          <br />
          <span style={{ fontSize: "20px" }}>
            inflation and gini doesn’t propensity-fix, nor count homes,
            courted-bonds or{space}
            <a href="https://carducci.us">collateral-repo-and-down</a>
          </span>
          <br />
          <span style={{ fontSize: "17px" }}>
            Price-deflation per hour is productivity, not gini, inflation, nor
            jobs, prices or natural redistribution (trade per hour)
          </span>
        </h2>
        Socialists do not want to government gentrify, they are
        market-communists for government, the republicans and libertarians are
        for private corporations, bond-index-funds &
        expiring-false-bid-insurance-premium-coverage-pools
        <br />
        <br />
        “There can only be two sides in a chamber with an isle,”
        <br />
        “Black Christmas is part of what the Marxists want to do,” Just the News
        <br />
        What the fuck does that mean
        <br />
        “Killing Keystone XL, hurt americas’ interest,” isn’t the usage fee
        laundered to government and corporate profits instead of target margin
        consumer surrogate. “Constitutional pipeline, let’s have jobs here,
        let’s have security here,”
        <br />
        <br />
        Bonds and home prices is not in inflation nor gini inequality; 7.5%
        bonds and money, 5% homes, 2% inflation and population
        <br />
        <br />
        Communists think we should take property, market-communists think they
        can take whatever property they want
        <br />
        <br />
        Love, comfort, and tranquility; m1v1===m2v2=gdp{space}/yr
        <br />
        <br />
        <Cable
          style={{ height: "440px" }}
          onError={handleScollImgError}
          src={
            this.state.iosNoPhoto
              ? ""
              : "https://drive.google.com/file/d/1n-bU8DgdAouc6_C5Qss9qTkwJJ3xfAsY/preview"
          }
          float="left"
          title="Jen Psaki (Yahoo Finance w/ chat) - You are laundering thru savings accounts but not paying it down"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        5x hours per employed and 2x employed per people makes 10x hours per
        home since 1970
        <br />
        <br />
        Here I capture the accusations away from mentally-crazy or sick, but
        “unhealthy,” understanding $3k/year/person new debt is created by people
        with high cash flow and burn, as opposed to me, an
        open-source-contributor{space}&bull;{space}40% debt spending and free
        rider mutable tax for no less than monopsonyand the same {space}
        <a href="https://micro-theory.com">intermediate-goods</a>
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.youtube.com/embed/nUNYL8V0GK4"
          }
          float="right"
          title="Stephen Moore (77WABC Moore Money) - 3/13/2021 "
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <a href="//www.slideshare.net/NicholasCarducci/thumbprint-phone">
          https://www.slideshare.net/NicholasCarducci/slideshelf
        </a>
        <iframe
          src="https://www.slideshare.net/slideshow/embed_code/key/uBm7lClHKhbYhz"
          title="https://www.slideshare.net/NicholasCarducci/slideshelf"
          width={"100%"}
          height="300px"
          style={{ border: "none" }}
          allowFullScreen
        ></iframe>
        p2p dns router:{space}
        <a href="https://support.apple.com/en-us/HT202303">
          apple/fb cloud keys end-to-end enbunction
        </a>
        <InstagramEmbed
          script={iGpostScript1}
          style={{
            float: "left",
            height: "min-content"
          }}
        />
        <div
          style={{
            backgroundColor: "black",
            color: "white"
          }}
        >
          debt-reversed by{space}
          <a
            style={{
              color: "rgb(197, 179, 88)"
            }}
            href="https://saverparty.xyz"
          >
            public-park-dollars 20% fed lands
          </a>
          {space} occupy wall st/gov is free market communism;{space}
          <a href="https://vaults.biz" style={{ color: "white" }}>
            86 credit as income
          </a>
          , free rider mutable tax &{space}
          <a href="https://30under5.us" style={{ color: "white" }}>
            implausible landlord use
          </a>
        </div>
        <div
          style={{
            width: "100%",
            backgroundColor: "rgb(180,200,255)"
          }}
        >
          <span style={{ color: "red" }}>c1970 half-life</span>
          {space}.5x unemployed to population, 10x price/hours more hours for
          median home
          <br />
          {/*this.state.width && <Misses width={this.state.width} />*/}
          <a
            href="https://lightte.ch"
            style={{ color: "white", textDecoration: "none" }}
          >
            ngo
          </a>
          <a href="https://www.fbi.gov/file-repository/2015-ncic-missing-person-and-unidentified-person-statistics.pdf/view">
            {childrenAbducted} US citizen children abducted since covid
          </a>
          : (not-fixed for cohort size yoy)
          <br />
          meanwhile login.gov and
          <br />
          dns routing twaddle and
          <br />
          allow apple to misrepresent{space}
          <a href="https://thumbprint.us/phone">privacy</a>
        </div>
        <hr ref={this.repeat} />
        <div
          style={{
            transition: ".3s ease-in",
            width: "100%",
            minWith: "300px",
            maxWidth: "600px"
          }}
        >
          "all of the give, none of the get," chris cuomo on hidden premiums for
          lower monthly-down-payment pays off, even when gdp/down-payments isn't
          LEGALLY a job
          <br />
          <br />
          <br />
          <div style={{ padding: "10px" }}>
            “Unlike most of wall street, we only have.one boss: our customer” Ed
            Bugos dollar vigilante, vigilante meaning a risk, discounting even
            potential-market-entrants, more and more as
            bond-value-withdrwawalable overpowers dollar
          </div>
          <br />
          <br />
          boycotting credit as income, you cannot{space}
          <a href="https://saverparty.xyz">get everything</a>[, in reference to
          the infrastructure spending bill], it's just not possible," kilmeade.
          education is trade secrets, patents are rent seeking (no utility is
          designable), profits are net loss, net loss is profits
          accrual-withdrawalable with bonds
          (improsonment-republic-subcontracts), kids should work
          <div
            style={{
              fontWeight: "bolder",
              backgroundColor: "navy",
              color: "rgb(197, 179, 88)",
              WebkitTextStroke: "1 rgb(197, 179, 88)"
            }}
          >
            Teapharmacy.party &{space}
            <a
              href="https://froth.app"
              style={{
                color: "rgb(197, 179, 88)"
              }}
            >
              epiology
            </a>
            : excess deaths account for cohort size
          </div>
          500k (NJ)mail in
          <br />
          How many voted already?
          <br />
          732k - David Wilestein 1/3 of total vote, 2.1m, is not the turnout;
          only of each 1/3 Dems, Republicans, non-voters (
          <a
            href="https://nextdoor.com/p/yJhWyXgPTdNG?utm_source=share&extras=Njc0NDU4Nzc%3D"
            style={{ color: "rgb(200,200,255)" }}
          >
            detesting/eligible, like my little brother
          </a>
          )
          <br />
          Particularly small business (trust-building)
          <br />
          <br />
          Nj transit “flex pass” collective bargain rollover tech A-OK
          <br />
          <br />
          <a href="https://magnate.company">green new deal</a>
          {space}would be to cash:debt*income back to 1908 and
          timelesspaydayroyalty
          <br />
          <br />
          330m/8b UBI is racist, 20x 55+/millennial-rental-income per capita is
          useless-price-inelasticity gerontocracy
          <br />\ Save the bond vigilantes geisers, Article3 to $1/$7t china of
          foreign owned debt "investing" of taxable-free-rider-immutable instead
          of timelesspaydayroyalty by industry-type not general-income
          <br />
          That's $32/day per person,{space}
          <a href="https://wavv.art/forumCUiXE5xjbwE6WfLqf58K">
            $1/day* for Afghanistan alone *Markey
          </a>
          <br />
          Can't be glass steagall & m4a #DontObamaMyBernie feign premium for
          monthly-deductible, as defining, "savings," rollover into
          non-concurrentable non-compete is pushing it, investment banks keep to
          equity, timelesspaydayroyalty scoped for industry-type for p2p only
          <br />
          <a href="https://froth.app/stats">100k/16m vaxxed UK 1800</a>
          <br />
          <br />
          15m excess deaths expected thru Great Leap Forward by population
          growth alone #InsuranceConflictOfInterests #RolloverInsurance
          #InvoicesAreTheft basis for #HonorSystemSignatures instead of{space}
          <a href="https://thumbprint.us/voting">#ArrayArrays</a>
          <br />
          <br />
          Abstain public officials on holdings, no #PatternDayTrading 2 week
          anonymity with sec backdoor
          <br />
          "contribute, not coerce," truncatedsalestax.com 30under5.us{space}
          <span style={{ color: "grey" }}>3under2.us</span>
          <br />
          Do not assume guilt by association, Article 4 receipt scope is by
          conviction
          <br />
          <br />
          jail needs to be of cost again instead of bid up for
          bond-index-funds/public-park-deed-liquidity, not for profit nor
          government-profit at useless-price-inelasticity,
          government-gentrification and bond-laundering
          <br />
          <br />
          uppers are legal by common law (check out majority report)
          taxpharmacy.party walgreens jail
          <br />
          <br />
          30% superchat premium too damn high! this is free info, no quid pro
          quo ;)
          <br />
          <div
            style={{
              width: "calc(100% - 156px)",
              float: "left",
              shapeOutside: "rect()",
              position: "relative",
              maxWidth: "300px"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              alt="Carface Jamie dimon like Floyd, if police are malfeasant, escalate; MinnesotaIsGuilty, AmphetaminesAre$, InvoicesAreTheft CreditCounterfeitLaundering"
              src="https://www.dl.dropboxusercontent.com/s/q2tvunefdxn4hh3/IMG_6886.jpeg?dl=0"
            />
          </div>
          <div
            style={{
              width: "calc(100% - 110px)",
              position: "relative",
              left: "100px"
            }}
          >
            National security division is domestic terrorist agency
            Threat-line-reporting on parents is voluntary not random as
            emulations get
          </div>
          <br />
          <div
            style={{
              width: "calc(100% - 156px)",
              float: "left",
              shapeOutside: "rect()",
              position: "relative",
              maxWidth: "300px"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              alt="Carface Jamie dimon like Floyd, if police are malfeasant, escalate; MinnesotaIsGuilty, AmphetaminesAre$, InvoicesAreTheft CreditCounterfeitLaundering"
              src="https://www.dl.dropboxusercontent.com/s/zq6akihiuud2f6w/Screen%20Shot%202021-11-02%20at%201.24.04%20PM.png?dl=0"
            />
          </div>
          <br />
          <div
            style={{
              width: "calc(100% - 110px)",
              position: "relative",
              left: "100px"
            }}
          >
            <a href="https://constitutioncenter.org/interactive-constitution/amendment/amendment-ii">
              Amendment 2
            </a>
            {space} says nothing about private property, Jack Posebic. Isn't he
            paid by CHINA? Cops are to recover-as-is & torts cover bid-price of
            sale without current debt-inelasticity value-met either
            <br />
            <br />
            He continues, "Jury was removed because they presumed-guilt for
            dismay with that weapon,{space}
            <a href="https://saverparty.xyz/kyle">neglectful of intent</a>."
          </div>
          <div
            style={{
              width: "calc(100% - 110px)",
              position: "relative",
              left: "100px"
            }}
          >
            #BondZero &bull; #HungJury &bull;{space}
            <a href="https://stackoverflow.com/a/69812518/11711280">
              #TruncatedSalesTax
            </a>
            {space}&bull; {space}#FundSewagePolice {space} convict-intranet
            tamperproof dns, ArrayArrays &bull; #ReverseM2 &bull;
            #MillennialIncomeDeficit &bull;{space}#GovernmentGentrification
            &bull; #FreePeopleLawsuits &bull;{space}#ConflictOfInterests &bull;
            #ClassPrecedenceMalfeasance &bull; #ConstantGDPoverPopulation
            <br />
            DEA/Walgreens, concentration #AmphetaminesAreMoney
            #MinnesotaIsGuilty: I guess we got time, but extends without
            reimbursing down payments to further fix the price-fixed as was
            withdrawn at intentionally impossible by being forseeable or
            <br />
            <div
              style={{
                width: "calc(100% - 110px)",
                fontSize: "30px",
                backgroundColor: "rgb(218, 198, 90)",
                padding: "50px 0px",
                textAlign: "center"
              }}
            >
              <a href="https://2052.live">2052.live</a>
            </div>
          </div>
          barrier to entry to{space}
          <a href="https://laborequity.org">get drugs</a>
          {space}#ConsumerTwitter and have legal rights rallying cry can be "
          <a href="https://micro-theory.com">hung jury</a>"
          <TwitterTweetEmbed
            style={{ width: "300px", float: "right" }}
            tweetId="1434938133246844930"
          />
          gentrification: wall st is top, free rider mutable tax, implausible
          rentier use & gdp=debt/down reversal, not cancel forbidden by previous
          demand nor bailout lending-counterfeiter-in-contract collusion with
          borrower to loiter gdp/payments 11/1
          <TwitterTweetEmbed
            style={{ width: "300px", float: "right" }}
            tweetId="1433865364602068999"
          />
          "the guy, among other mental inhabilities, is stupid," says Rudy
          Giuliani of Biden, without correlative brainscan.info
          <div
            style={{
              margin: "10px",
              borderRadius: "10px",
              border: "1px solid rgb(100,200,255)",
              textAlign: "center"
            }}
          >
            "Stock market is up, imagine if the other guy were here. we are
            doing great!"
            <br />
            <br />
            "Yeah, anti-vaxxers are lunatics,{space}
            <a href="https://vaults.biz">10x price/hours to 1970</a>
            {space}is how I determine your InvoluntaryCommitment anyway, tie him
            to a table"
            <br />
            <br />
            <span style={{ textDecoration: "underline" }}>
              duress beyond mvp findings
            </span>
            <br />
            hung-jury of 1/4 doctors to be ignored (no
            industry-precedence-saveFace-motive), assume virions go in, mandate
            vaccines instead of understand bacteria causes virus-infected-cells
            to shit virions
            <TwitterTweetEmbed
              style={{ width: "300px", float: "right" }}
              tweetId="1432355213428596736"
            />
            <TwitterTweetEmbed
              style={{ width: "300px", float: "right" }}
              tweetId="1434925859023040518"
            />
            #ExcessDeaths are expected 16m life-expectancy before 1950 in China
            #GreatLeapForward
            <br />
            <br />
            People are jury, not Iblis, stay in your lane or have comparable
            retribution and, you guessed it, reciprocity
            <div
              style={{
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid rgb(100,200,255)",
                textAlign: "center"
              }}
            >
              #Degrowth is suplanting #M2Laundering of $32/day per person that
              with would take 44 years of somehow paying current income on debt,
              with #MaxProfitRoyalty #FreeRiderMutables without
              #BipartisanMonopsony #GovernmentGentrification but
              #TargetMarginNetworks and #FiniteProducers
            </div>
          </div>
          <br />
          <span style={{ textDecoration: "underline" }}>
            geohash-transaction-line {space}
            <a href="https://codesandbox.io/s/dark-firefly-yd9vi?file=/netlify/functions/src/index.js">
              sandbox
            </a>
          </span>
          <br />
          <div
            style={{
              fontSize: "30px",
              backgroundColor: "rgb(218, 198, 90)",
              width: "100%",
              padding: "50px 0px",
              textAlign: "center"
            }}
          >
            <a href="https://vaults.biz">standing</a> for{" "}
            <a href="https://micro-theory.com">escalation</a>
            <br />
            carface{space}
            <a href="https://truncatedsalestax.com">Jamie Dimon</a>
            {space}like{space}
            <a href="https://teapharmacy.party">Floyd</a>
          </div>
          malfeasance of cops turns castle doctrine of equity - accrual &
          non-rollover #ConsumerTwitter #FreePeopleLawsuits #TruncatedSalesTax
          grocery 3%-percentile average-indexed-purchases #FundSewagePolice
          vaults.biz vau.money:~: geohash transaction-line voting by ArrayArrays
          [public-id, way*device2device-key], tamper-proof-non convict grid
          [thumbprint.us/privacy,{space}
          <a href="https://saverparty.xyz">saverparty.xyz</a>] Article3
          Tranquility Involuntary-Servitude Third-Party-Beneficiary
          <hr ref={this.gdp} />
          <GDP width={this.state.width} />
          when you launder, it doesn't matter what you{space}
          <a href="https://www.dailystar.co.uk/news/weird-news/nasa-space-news-iss-fake-16818740">
            spend money on
          </a>
          {space}no-surrender in{space}
          <a href="https://github.com/NickCarducci/react-local-firebase/blob/master/license.lz.txt">
            contract law
          </a>
          <br />
          <br />
          why national-populism? vaccines are racist
          <br />
          "In order to get into America, we need to make sure you're not down
          with [Sharia-Law]." -Greg Kelly, Labor Day, 2021
          <TwitterTweetEmbed
            style={{ width: "300px", float: "right" }}
            tweetId="1433776732327264258"
          />
          <div style={{ position: "relative", width: "100%" }}>
            <a href="https://www.oreilly.com/library/view/the-geek-atlas/9780596802257/ch111.xhtml">
              O'Reilly
            </a>
            : upside parobolic tragectory
            <img
              style={{ maxWidth: "100px", height: "auto", width: "100%" }}
              alt=""
              src="https://www.dl.dropboxusercontent.com/s/iqa8muy2285n4g5/upside%20parobolic%20trjectory.webp?dl=0"
            />
          </div>
          <div
            style={{
              position: "relative",
              width: "100%"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              alt=""
              src="https://www.dl.dropboxusercontent.com/s/bvhbl2tq8aa7l0m/far%20right%20islamist%20castle%20doctrine%20or%20spell%20allowance.jpeg?dl=0"
            />
          </div>
          <div
            style={{
              position: "relative",
              width: "100%"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              alt=""
              src="https://www.dl.dropboxusercontent.com/s/t06zpfic3epq6qu/Volume-of-US-Immigration-and-Continent-of-Origin-by-Decade.png?dl=0"
            />
          </div>
          <div
            style={{
              position: "relative",
              width: "100%"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              alt=""
              src="https://www.dl.dropboxusercontent.com/s/74eykei71v5g2u3/Screen%20Shot%202021-05-19%20at%204.16.35%20PM.png?dl=0"
            />
          </div>
          <div
            style={{
              position: "relative",
              width: "100%"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              alt=""
              src="https://www.dl.dropboxusercontent.com/s/x5kf35nc6jtlc1h/Screen%20Shot%202021-05-19%20at%204.14.45%20PM.png?dl=0"
            />
          </div>
          200k new people every month, sanitation has
          diminishing-attribution-to-life-expectancy
          <br />
          <br />
          So, If 500k excess deaths are expected, I would not certify signatures
          as that technically is impossible @jaketapper #January6thInsurrection
          #JorgensenWonNewJersey 2.4m nj voters detest all candidates ({">"}1/3)
          <br />
          <br />
          {/**
          Shit boi you launder your home thru your church 
          JerseyRizzo
          ? Talk about http://3under2.us only way to get out of this 
          MonmouthYoung
          moldmask.co, cocaine is money, purity health dpt
          SaverParty
          ·
          4m
          Write it off like 
          Zoom
          wages #taxes 
        */}
          In one breathe democrats will say the government assets belong to the
          poeople and another that they are not operating a monopsony,{space}
          <a href="https://3under2.us">unnecessarily</a>
          {space}Pubs are trickle down, Dems are ubi-bail-out, Berts are
          fractional-reserve hypocrites and{space}
          <a href="https://micro-theory.com">Savers are fair & honest</a>
          {space}
          (in-non-duress/-fraud/
          <a href="https://30under5.us">
            -intent-to-harm-not-improve-plausibly-to-oneself-many-units-or-stores
          </a>
          ), and efficient
          <br />
          <br />
          Rising-stars are when old people are dumber!
          <br />
          <br />
          not standing for fair skill-/price-based-discrimination
          <br />
          <br />
          "Rights we couldn't do anything about." Talk about an oxymoron
          <br />
          <br />
          Voting by gov ID is not free (in addition to counting and platforms),
          it is $25 for 7 years or it is nonconsensually-diluting{space}
          <a href="https://saverparty.xyz">Saver</a>'s equityutilitymoney.com
          <br />
          <br />
          Earnest: "Hate the fine print? Get the facts on student loan
          refinancing from a friendly Earnest refinancing rep."
          <br />
          <br />
          ___ - "Dont need help wit my student loans, the will b
          cancelled/forgiven soon"
          <br />
          <br />
          Nick Carducci cancelled, forgiven: what do they mean? Theft or default
          to their true counterfeit value
          <br />
          <br />
          ___ - "Just paid mine off. Very happy. Can't wait to see how much my
          credit score goes up."
          <br />
          <br />
          Nick Carducci: everyone’s goes up if it is indexed against
          larger-assets and larger-shared-accounts while cash:debt decreases.
          Good job! My policy will reverse gain/loss to cash:debt ratio since
          1908, now 1:44, so top borrowers like you aren’t shafted by other
          methods of “forgiveness or cancel” which is always bailout.. if no
          collateral... otherwise they need to give down-payments back to supply
          chain otherwise.
          <br />
          <br />
          The best refinancing is a default! Reimburse down-payments and
          repossess, then buy the collateralized asset for 97.72% cheaper 43/44
          debt to cash is now 44:1 since 1908
          <br />
          <br />
          Diff between pyramid scheme that is legal (wholesale) vs illegal
          (money, counterfeit-wholesale, threat, prisoners'-dilemma duress
          (according to investopedia it is a strategy to compete with customers
          (not find a niche to curry favor), but according to contract law it is
          forced restraint or restriction, illigitimate, extortion and
          voidable))
          <br />
          <br />
          ___ - "AND THEN PAY IT BACK!!!!!"
          <br />
          <br />
          Nick Carducci impossible, they have to earn it back from teacher or
          launder it from Savers no consensually while they squat
          <br />
          <br />
          ___ - "Eat your degree! No jobs for you!"
          <br />
          <br />
          Nick Carducci get mad about borrowers-squatting on assets promising
          your money Saver Party (also jobs are not necessarily the goal, if you
          are inventing something)
          <br />
          <br />
          Pulling out of Afghanistan means letting criminals go? Is that Afghani
          gov decision as a threat/strike for us to help them or
          <br />
          <br />
          Akin to letting the loons out of the Asylum as strike of bail. Oldest
          trick to manufacture an enemy, herring or Trojan-horse. humoral
          response is better and doesn’t create dependency. You’re only as good
          as your creativity in making your own mRNA. Couple that with the fact
          that condensation happens, you can boot the duress of entry without
          having to weigh the rights of individuals to business.......
          <br />
          <br />
          You shouldn’t be forced to take any vaccine to get into school if
          condensation, and symptoms
          <br />
          <br />
          Discreet-state is to partial-derivative, as individual is to
          population @lexfridman unless you’re of the
          behavioral-extrapolist-religion
          <br />
          <br />
          humoral is best ?
          https://news-medical.net/news/20210222/Some-SARS-CoV-2-variants-evade-mRNA-vaccine-induced-humoral-immune-says-study.aspx
          latent tb rises w condensation
          <br />
          <br />
          "I'm not that kind of guy, don't do me the covid." - Obviously thought
          Covid is an excuse to kill dissidents. Should have let him go he never
          hurt anyone. That is #MinnesotaIsGuilty protocol. The Prosecution
          @mncourts want to clear their own name by scapegoating Chauvin
          <br />
          <br />
          we can arrest those representatives that do that dead or alive given
          Minnesota’s inculpability for George Floyd’s death #ChauvinTrial
          <br />
          <br />
          . @seanspicer if you aren’t deep state blink twice or have a segment
          of glass steagal and lewinsky
          <br />
          <br />
          Exponential assumption is safe to extrapolate a sample since it is
          unlikely unless more than 50% hypothesis would happen.. expected value
          is representative if shuffled and full population is surveyed
          @SharylAttkisson NEXT <br />
          <br />
          No improvement after 12 visits at Riverview, give me $15k/yr for my
          summer bartending, and put foam on guard rails near trails on rt79.
          hip, ankle compensating after 10 mins of sweeping the kitchen at
          banksquat ln
          <h1>
            Your honor can s*** m* d*** -
            <a
              style={{ color: "grey" }}
              href="https://nature.com/articles/s41577-020-00434-6/figures/2"
            >
              if you are old, afro or Hispanic
            </a>
            - to{space}
            <a
              style={{ color: "grey" }}
              href="https://www.prweb.com/releases/new_study_identifies_mental_health_as_a_risk_factor_for_covid_19/prweb17836314.htm"
            >
              get into my events
            </a>
            ,{space}
            <a
              style={{ color: "grey" }}
              href="https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/semen-has-more-benefits-than-you-think/articleshow/55725846.cms"
            >
              it is healthy
            </a>
            .{space}If you are polish-italian american{space}
            <a
              style={{ color: "grey" }}
              href="https://twitter.com/viathumbprint/status/1382342045889609730?s=20"
            >
              under 40
            </a>
            , you can come into{space}
            <a href="https://wavv.art">thumbprint.us</a>
            {space}without the jab (my d***)
          </h1>
          <a href="https://www.youtube.com/watch?v=Gp5WEeQi6jE">
            Geraldo Rivera
          </a>
          : After 20 years-#AfghanistanWar is a lost cause. Why stay? We can’t
          remake the nature of this brutal, opium-addicted, primitive society.
          If international terrorists seek to use it as a base for operations,
          our drones can wreak havoc from above. Otherwise, it’s 'endless war.'"
          <br />
          <br />
          T'was my sworn testimony that I no want to go jail 4 2 years after
          being kicked off @JohnsHopkins wrestling for using a
          performance-enhancer, driving #ChauvinTrial #MinnesotaIsGuilty so I
          took my lawyer's advice to claim w/o looking at evidence to disprove
          that I was disobedient
          <br />
          <br />
          <div style={{ backgroundColor: "rgb(255,150,150)" }}>
            Jim Sciutto: "
            <a href="https://3under2.us">Governments need to borrow money</a>"
            (10:04 am est 4/15/2021)
            <br />
            <br />
            “$2.3t isn’t going to be paid in the end, but we want it in the end”
            - @SenCapito @PoppyHarlowCNN http://3under2.us @MoodysInvSvc
            <br />
            <br />
            <div style={{ backgroundColor: "rgb(255,200,200)" }}>
              Time deprivation is not a factor for (non-operating but absolute)
              reconciliation #CovidRelief #MinnesotaIsGuilty #ChauvinTrial
              folding of fortunes wouldn't be invested without the malfeasance +
              collusion, ajectly price-fixing, the prohibition of settled-trade
              + price-based not on consumers that consent and are able to..., if
              deposit is given back for a better price for the ask (and not on a
              discriminatory basis unless it is a product of their
              accrual-labor...), and buy-to-rent weren't allowed
              <br />
              &&
              <br />
              to that end the @uscourts acted
            </div>
          </div>
          <br />
          <div
            style={{
              backgroundColor: "rgb(180,200,255)"
            }}
          >
            Mark Zuckerberg "With Earth Day soon, I'm happy to share that
            Facebook's operations are now 100% supported by renewable energy.
            We've reached net zero emissions for our operations and we're one of
            the largest buyers of renewable energy in the world -- resulting in
            $8 billion invested in 63 wind and solar projects around the world,
            creating tens of thousands of jobs. Thanks to our team and partners
            who helped reach this goal!"
          </div>
          <br />
          Does it{space}
          <a href="https://magnate.company">take</a>
          {space}more people to run solar and wind energy than gas and coal?
          <br />
          <br />
          All the{space}
          <a href="https://www.flightsimulator.com/">
            governments
            {/* beiber/drugs, march2020SuperclusterMapboxUberReactGL*/}
          </a>
          {space}buy each others’ debt, which they use to gather assets (and
          labor) from individuals @cnn @TheJusticeDept @un
          <br />
          <br />
          “All had big hearts and even bigger appetites to make the federal
          government more accessible and understandable to the millions of
          people who rely on it.” Dollar-splitting-labor to goose prices on
          living is why people rely on it. It’s dependence @usds @ftc
          <br />
          <br />
          9/11 was obviously insurance and risk fraud (kneecap-bat-,
          bail-strike-, property-destruction-threat). the hijackers left their
          passports behind? UK news reporting Tower 3 before it is demolished?
          Planes slice through front then bounce off floor, with{space}
          <a href="https://www.jvejournals.com/article/16784">
            no ricochet debri
          </a>
          ?
          <br />
          <br />
          Castle doctrine [property, shares, opportunity (by duress or
          buy-to-rent)] extends to hostage cold war
          <br />
          <br />
          “$2.3t isn’t going to be paid in the end, but we want it in the end” -
          @SenCapito @PoppyHarlowCNN 3under2.us @MoodysInvSvc
          <br />
          <br />
          "Need for the pandemic," median-death-age/expectancy is normal...
          stealing http://equityutilitymoney.com by http://residualsplit.us only
          increases demand curve on price... the labor*resource Supply exists
          without you @HouseDemocrats - Opportunity: Not ask-bid behavior but
          supply
          <br />
          <br />
          if the copycats get all the investible monies at year end, the
          consumer loses; however, margins-can-be-targeted per
          microeconomic-theory if too important or broad is the copyright
          <br />
          <br />
          it is not faster it just raises price or lowers quality. IT DOESN'T
          JUST BRING DEMAND FORWARD INSTEAD OF ALLOW DEMAND TO REMAIN BUT IT
          BRINGS IT UP
          <br />
          <br />
          <div
            style={{
              backgroundColor: "rgb(180,200,255)"
            }}
          >
            Somebody on npr or wnyc, "[Yes/no is qualitative; scalar not linear
            on time or space, changes]." Integral, by shuffled-population
            sample...
          </div>
          <br />
          Does empirical data mean (1) of a shuffled population or a voluntary
          poll (of the voluntary population)? Or is it (2) absolute? A.k.a. is
          it good-sample data, or unshuffled-population samples? @BachmanANjax
          <br />
          <br />
          A business is if it keeps the money, yearToYear, by the way
          #ChauvinTrial #MinnesotaIsGuilty
          <br />
          <br />
          Business is the key to non-profit efficiency
          <br />
          <br />
          Salary-cap notwithstanding
          <br />
          <br />
          if it goes into your personal account it is labor, which you aren't
          allowed to sell as is like counterfeiting demand for a price
          unrequited from your employer or customer
          <br />
          <div style={{ backgroundColor: "rgb(180,200,255)" }}>
            <b>
              "If you got a payment last year, it won't reduce your tax refund
              or increase what you owe when you file your 2020 tax return this
              year. The payment also doesn't count as income for purposes of
              determining if you're eligible for federal government assistance
              or benefit programs."
            </b>
            {space}
            <a href="https://www.cnet.com/personal-finance/stimulus-checks-and-your-taxes-what-you-need-to-know-when-you-file-your-2020-tax-return/">
              abject fraud by you! @USTreasury @ftc
            </a>
            <br />
            are you intending to not include this stimulus payment in the
            historical spending? @potus @IRSnews @OversightDems{space}
            <a href="https://billbiden.org">Bail-Out- @JoeBiden</a>
            {space}and @BarackObama at your scourge
          </div>
          <br />
          Kamala called border agents Kkk “2x preg-death by afro/hispanic”
          Justice [force, how] violence [sid]
          <br />
          <br />
          “Can’t get paid without a house bank” - boehnor “1,802 bounced
          checks.” Impeachable offense raped with teeth around dick
          @SpeakerBoehner wtf
          <br />
          <br />
          repeal of glass steagal false advertising is impeachable @kilmeade
          <br />
          <br />
          Jan 6 was most dangerous attack on our domestic democracy there is.
          QAnon but the election was faulty for calling on Election Day.
          Misleading is illegal
          <br />
          <br />
          Communist-monarchy : Micro-Theory.com @lexfridman @tylercowen
          <br />
          <br />
          Marx scarcely talked about communism @LidiaNews @RepPeteKing
          <br />
          <br />
          “[Dismissivisity is the worst,]” that’s true bro
          <br />
          <br />
          Misinformation is illegal, counterfeit-wagering and{space}
          <a href="https://saverparty.xyz">colonialism rent-seeking</a>
          {space}is illegal #MinnesotaIsGuilty #ChauvinTrial
          <br />
          <br />
          Complex conspiracy theory online, social isolation exasperate feelings
          and violence, where is federal crime, arrested 5 QAnon
          <br />
          ...adherents within Jan 6
          <br />
          <br />
          Watkins. 80k kids are lost a year per 2015 FBI. You people are as cold
          as reptiles and gene splicing is possible @MartinHeinrich @CIA
          <br />
          <br />
          if you ban debt-<a href="https://micro-theory.com">haram</a>, taliban
          will not jihad. shares and monopsony of assets is territory, which is
          castle-doctrine @cia
          <br />
          <br />
          80k missing children a year is due to @logindotgov malfeasance cc:
          @OccupyDemocrats
          <br />
          <br />
          “I wish [Iran] well but they will not embrace liberty soon, so it’s ok
          to use the constitution to be hostile internationally” -
          @charliekirk11
          <br />
          <br />
          Every-white-collar-crime,{space}
          <a href="https://3under2.us">let him go</a>,{space}
          <a href="https://vianickcarducci.medium.com/optimal-security-for-webapps-dd2a65c2418c">
            got an address
          </a>
          {space}and satellite imaging globally every 10 secs @SFRCdems
          <br />
          <br />
          <h3>
            It is a waste to have any{space}
            <a href="https://bankingisnot.biz">debt</a>:currency:asset, but it’s
            a waste to not enslave people too
          </h3>
          <br />
          <div
            style={{
              borderRadius: "10px",
              backgroundColor: "rgb(180,200,255)"
            }}
          >
            What does AI-indexing have to do with earth imaging every 10 minutes
            <br />
            <br />
            “We can use repeat offenders. We can counter compromised databases
            for private companies” - @cia at 2021 senate intel hearing. You use
            SSA number, address, DOB and favoriteColor instead of physicalKey or
            convictsOrAnon on cloudServers with privateKeys @logindotgov
            <br />
            <br />
            CFIUS is an international law crime, by monopsizing-profits/assets.
            It’s justified by having the best standing if repossession doesn’t
            constitute reimbursement for down-payment according to the people in
            charge @CIA who benefit from it. Bonds aren’t national security but
            ulterior
            <br />
            <br />
            Those companies are not yours but China shouldn’t be able to own
            them because they print money for debt, like we do to monopsonize
            and prohibit trade settlement to free-rider-mutable things
          </div>
          <br />
          You need slaves to be fed well
          <h1>National Security Casino</h1>
          <h2>
            Where Anti-Trustbuilding & Inhibiting Slavery (
            <a
              style={{ color: "black" }}
              href="https://constitutioncenter.org/interactive-constitution/amendment/amendment-xiii"
            >
              Amendment 13
            </a>
            ) is a non-issue of insider-preference (
            <a
              style={{ color: "black" }}
              href="https://constitutioncenter.org/interactive-constitution/amendment/amendment-xiv"
            >
              Amendment 14
            </a>
            ) when the State lies in the name of bonds malfeasant adjunication
            to moot (and Section4 is null if Section1 is to persist for cash is
            an asset, and settlement or occupational-account is the only way to
            trade without usurping a third-party-beneficiaries' consent
            unrequited),
          </h2>
          <h5>
            <a href="https://www.gurufocus.com/term/Treasury%20Stock/BA/Treasury%252BStock/Boeing+Co">
              corporate share
            </a>
            {space}fraud or non-free-rider-immutable tax to create embedded
            monopsonies and again poor outcomes compared to, not Central
            planning totalitarianism is communism not socialism (re: Sen Ron
            Johnson with supply-side Kudlow), but
          </h5>
          <h4>
            <a href="https://vaults.biz">
              capitalism without
              promises(accrual,invoice,counterfeit-in-contract,creditorHarmOfBorrowers'Customers)/without
              or rental-colonialism, built-to-rent prohibition of settled trade
              and price-fixing by owning it to not use it/with profit schedules
            </a>{" "}
            (
            <a
              style={{ color: "black" }}
              href="https://constitutioncenter.org/interactive-constitution/interpretation/article-iv/clauses/42"
            >
              article3;3
            </a>
            )
          </h4>
          <br />
          even though it is well known the third reich rose to power
          <br />
          not by a fervor of hair color but
          <br />
          under the auspices of cancelling debt, spent it by price-inelasticity
          spending, now with an original principle of 1/41 (
          <a href="https://micro-theory.com">2cash/82debt</a>)
          <br />
          much more than monetary minus housing inflation how the{space}
          <span style={{ textDecoration: "line-through" }}>
            ask sets the price for the bid to take
          </span>
          , now 2%
          <br />
          paying off private-debt with public credit; trasury share not with
          standing outstanding in price to equity share
          <br />
          <img
            style={{
              display: "flex",
              position: "relative",
              width: "100%"
            }}
            alt="ba mcd xom pfe nflx tsla (treasury share-scale) in September, 2020"
            src="https://www.dl.dropboxusercontent.com/s/59wt021py4g7b8x/Bamix.png?dl=0"
          />
          <div>
            boeing exxon etc all showing correlation of treasury share stock
            underperforming the Covid event... begs the question if covid was
            fraud to sell
          </div>
          <br />
          <div>
            Also, national security and{space}
            <a href="https://constitutioncenter.org/interactive-constitution/amendment/amendment-xvi">
              Amendment 16
            </a>
            {space}evidently take precedence over{space}
            <a href="https://www.ftc.gov/tips-advice/competition-guidance/guide-antitrust-laws/antitrust-laws">
              Anti-Trust Monopsony
            </a>
            {space}
            <a href="https://www.investopedia.com/articles/investing/110513/utilizing-prisoners-dilemma-business-and-economy.asp">
              Duress
            </a>
            {space}
            <a href="https://constitutioncenter.org/interactive-constitution/amendment/amendment-xiii">
              Slavery
            </a>{" "}
            as well as freedom of expression (Amendment 1) in leveraging other
            people's money, taking other people's money & privacy by only
            allowing evidence to be found legally through subpoena with
            notification to user and an intranet for parole-users with{space}
            <a href="https://vianickcarducci.medium.com/optimal-security-for-webapps-dd2a65c2418c">
              Gov ID sign-in
            </a>
            {space}for all to the untracked-internet, device-inputs and nil
            third-party sharing to respect Amendment 4 Writing for a{space}
            <a href="https://constitutioncenter.org/interactive-constitution/amendment/amendment-i">
              community
            </a>
            {space}can be{space}
            <a href="https://constitutioncenter.org/interactive-constitution/interpretation/article-iv/clauses/42">
              dangerous
            </a>
            , and responsibility is requested.
          </div>
          <br />
          <div>
            Also, not adjunicating deals for national secutiy reason is
            prohibiting trade. You cannot respect valuations fixed by impossible
            invoices
          </div>
          <br />
          <div>
            Also, lying about{space}
            <a href="https://www.gurufocus.com/term/Treasury%20Stock/BA/Treasury%252BStock/Boeing+Co">
              treasury
            </a>
            {space}shares (under the auspices of the{space}
            <a href="https://www.justice.gov/">SEC</a>
            {space} makes them a non-impartial judge and defendant at their own
            trial for false advertisement of will and fraud) not being
            outstanding in price-share metrics like earnings, sales or book - or
            permitting investors to trade anonymously with exchanges and retail
            with exchanges or brokers without similar protection under the law
            (either show us 13D immediately or allow retail to hide their
            unhedged positions) in the interests of Article4;4 - is not an equal
            protection under the law, monopolistic and a strategy of colonizers
            or community-wide slave-owners. Also, selling citizens out to
            foreigners is not only involuntary trade but violation of{space}
            <a href="https://constitutioncenter.org/interactive-constitution/interpretation/article-iii/clauses/39">
              Article3;3
            </a>
          </div>
          <br />
          1. Promise other peoples' money 2. Corner assets 3. Bro down
          <br />
          <br />
          Cornering the market as in finding a niche is not cornering the market
          as in competition with customers to take their marketable-assets by
          scalping price
          <br />
          <br />
          insurance is not subscription-membership because one person's
          subscription does not go towards someone else's, it goes to pay for
          their non-{space}
          <a href="https://saverparty.xyz">monopsony</a>, individual servicing.
          insurance is duressful trade, by invoice, gift-certificate or
          max-expense, prohibiting trade and causing slavery just the same as
          debt
          <br />
          this duressful arrangement can cause grave harm of cancer from
          foreign-made antibodies and mRNA.
          https://www.nature.com/articles/cddis2016148. exclusion is slavery by
          free riders taking services of those excluded elsewhere in society
          <br />
          Domestic violence{space}
          <a
            style={{ color: "black" }}
            href="https://constitutioncenter.org/interactive-constitution/interpretation/article-iv/clauses/42"
          >
            article4;4
          </a>
          {space}can be stopped by govID && parole intranet let alone violating
          <br />
          this duressful arrangement can cause grave{space}
          <a href="https://humanharvest.info">harm</a>
          {space}of cancer from foreign-made antibodies and mRNA.
          https://www.nature.com/articles/cddis2016148. exclusion is slavery by
          free riders taking services of those excluded elsewhere in society
          <br />
          <a href="https://taxfoundation.org/american-rescue-plan-covid-relief/">
            $12b
          </a>
          {space}for public health records and exclusion by
          free-rider-private-entities, instead of non-invasive evidense or
          visible bodily symptoms
          <br />
          $23b for CIA to break A4 when tech for Gov-ID login and intranet while
          allowing end-to-end encryption
          <br />
          In market economics, demand are price takers - our only respite is our
          capacity to spend in this ask first-bid later negotiation process.
          <br />
          <br />
          <a href="https://saverparty.xyz">
            In market economics, demand are price takers - our only respite is
            our capacity to spend in this ask first-bid later negotiation
            process.
          </a>
          <br />
          Economic growth is apples and oranges traded, or a natural
          redistribution of wealth depending on objective skill, quality or
          price of their own assets in royalty-schedule. It is also non-sensical
          to look at the number GDP without adjusting for new money debt and
          persons by division or change on their own indices
          <br />
          <br />
          Without competition consumers are harmed by prohibited utility for
          their own usurped benefit, while trade defined is a mututal-settlement
          of exchanged properly-owned benefits
          <br />
          <br />
          "bail-out", "stimulus", "reconciliation" is fraud for
          lender-colonists. All Network TV as well as Newsmax say otherwise.
          <br />
          Now they are calling the dollar-split + unrequited borrowers’
          customers’ consent to trade and serve in contract, a reconciliation
          package at Newsmax, instead of fraud for invoices and
          rental-colonialists prohibiting price-elasticity: you need to be sued
          <br />
          <br />
          <a href="https://wavv.art/Iran">Islam</a>
          {space}says{space}
          <a href="https://www.youtube.com/watch?v=Gp5WEeQi6jE">
            trespassing (2006 Geraldo Opium US-Afghanistan report)
          </a>
          {space}is ok to war others, but uselessly abuse animals which is never
          supported by westerners; however, obviously China feels the same about
          a b**********g animals for some etherial effect. G-d is supposed to do
          the judgement is something they misinterpret about their own text.
          amazing. I am listening to John Bachelor now. Jews for reparations
          were excluded from being bankers, that is not the way; then jews
          supported british winning of lybia over italy. looking at italian
          intent there now.... yup, financial
          slavery. http://cup.columbia.edu/book/conflict-conquest-and-conversion/9780231138642
           this is not the teachings of Christ and/or G-d. The Rev and the Rabbi
          just said the Third Reich rose to power because the axis thought Jews
          were different AND thought Jews were the cause of “woes” in Europe.
          Different how? Placing interest on non-Jews (Hakahla)? Insurance pool
          duress hot potato? That quite literally does cause dominoes of
          foreclosures. Believe me I am a home builder. Although Killing Jesus
          with Roman gov for protesting animal sacrifice and unequal treatment
          of money and share, or “cheering for British win in Tunisia” doesn’t
          help Optics for Italians Crucifixion was directive by Jewish and Roman
          leaders.
          <br />
          <br />
          <div
            style={{
              position: "relative",
              width: "100%"
            }}
          >
            <a href="https://3under2.us">
              <img
                style={{
                  height: "auto",
                  width: "100%"
                }}
                alt="DoD AI report 2021 on NewsNow Fox"
                src="https://www.dl.dropboxusercontent.com/s/ligeqdo7m96bgy0/BusinessOfDOD.jpg?dl=0"
              />
            </a>
          </div>
          <div
            style={{
              position: "relative",
              width: "100%"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              alt="$370k/person/year in m2 created for appraised for no utility"
              src="https://www.dl.dropboxusercontent.com/s/r500t29a6058oll/Screen%20Shot%202021-04-11%20at%206.53.30%20AM.png?dl=0"
            />
          </div>
          <br />
          “We need to win this competition in indexing, remove bureaucracy in
          gaining resources” Dept.Def 3.4% Budget AI R&D of Budget (+1.2%, +16%
          max) "talent, ethics & international politics" for 'AI' population
          surveillance, cut civil priorities, values, technological platforms
          that bring these technologies (input-cost monopsony)
          <br />
          <br />
          “There is no zero rate tax [interest per time not royalty, maybe when
          royalty exclusively allowed, there are like-4 free-rider-immutable
          things. - Larry Kublow
          <br />
          <br />
          It is a waste to have any debt:currency:asset, but it’s a waste to not
          enslave people too
          <br />
          <br />
          Patents and over-broad copyright is inefficient
          <br />
          <br />
          monopsony is self-defeating because free-rider-immutable
          input-cost-demand and production is paid by everyone by sales tax or
          equityutilitymoney.com dilution or residualsplit.us
          <br />
          <br />
          <div style={{ backgroundColor: "rgb(255,200,200)" }}>
            Not buying Russian bonds doesn’t hurt their economy, the supply is
            still there @cnn http://micro-theory.com
            <br />
            <br />
            The court moves into their YMCA segment here with a stretch in place
            <br />
            <br />
            Judges must put equity-rights above laws The left wants the majority
            instead of experts, the right wants to not follow humoral or common
            law Cell diffusion
            <br />
            <br />
            I should repossess http://wethepeople.gov, colluding with other
            governments and their bondage on citizens is uh false advertising
            @SenMarkey @ftc @fec @USTreasury @federalreserve @fbi @cia
            @BarackObama @MittRomney @nickcarducci
            <br />
            <br />
            Will http://vote.gov be any but an api? I was thinking of making my
            elections, cases and budget proposals extend, you def cannot make a
            global SaaS competitor w mucho counterfeiting @chase #ChauvinTrial
            #MinnesotaIsGuilty @MNCourts @MNBudgetProject http://3under2.us
            <br />
            <br />
            It’s little descriptive though no? @logindotgov @uspto : shouldn’t
            you be http://lightte.ch [check on this later, need to deploy, ngo
            (non-serflord, http://nationalsecuritycasino.com banksquattership,
            rentier-colonialism and compete consumer) definitions of wage or
            profit commitment]
          </div>
          <TwitterTweetEmbed
            style={{ width: "300px", float: "right" }}
            tweetId="1431700889908228104"
          />
          <a
            href="https://saverparty.xyz"
            style={{ backgroundColor: "navy", color: "rgb(197, 179, 88)" }}
          >
            Saver Party{space}
            <span role="img">🐿</span>
          </a>
          patents are rent-seeking, profits are net-loss of corporate market
          communes, occupy wall st is free market communism 'gainst the free
          rider mutable tax, trust-building, deficit laundering implausible
          ladlord use collctive bargaining fraud friends & family
          lein-discrimination and non-reciprocated non-crazy reasonable doubts
          {space}
          {">"}1/12
        </div>
      </div>
    );
  }
}
