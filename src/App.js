import React from "react";
import GDP from "./GDP";
import "./styles.css";

export default class App extends React.Component {
  state = {};
  componentDidMount = () => {
    var date = new Date(new Date().setHours(0, 0, 0, 0));
    const covidStart = new Date(new Date(`2020-01-01`).setHours(0, 0, 0, 0));
    const dateSpan = date.getTime() - covidStart.getTime();
    const years = dateSpan / (31556952 * 1000);
    this.setState({ childrenAbducted: years * 80000 });
  };
  render() {
    const { childrenAbducted } = this.state;
    return (
      <div style={{ width: "100%", textAlign: "center" }}>
        <div
          style={{
            width: "100%",
            backgroundColor: "rgb(180,200,255)"
          }}
        >
          <a
            href="https://lightte.ch"
            style={{ color: "white", textDecoration: "none" }}
          >
            ngo
          </a>
          <a href="https://www.fbi.gov/file-repository/2015-ncic-missing-person-and-unidentified-person-statistics.pdf/view">
            {Math.round(childrenAbducted)} US citizen children abducted since
            covid
          </a>
          <br />
          meanwhile login.gov and
          <br />
          dns routing twaddle and
          <br />
          allow apple to misrepresent&nbsp;
          <a href="https://thumbprint.us/phone">privacy</a>
        </div>
        <div
          style={{
            transition: ".3s ease-in",
            width: "100%",
            minWith: "300px",
            maxWidth: "600px"
          }}
        >
          <GDP />
          when you launder, it doesn't matter what you&nbsp;
          <a href="https://www.dailystar.co.uk/news/weird-news/nasa-space-news-iss-fake-16818740">
            spend money on
          </a>
          <br />
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
          ??
          4m
          Write it off like 
          Zoom
          wages #taxes 
        */}
          In one breathe democrats will say the government assets belong to the
          poeople and another that they are not operating a monopsony,&nbsp;
          <a href="https://3under2.us">unnecessarily</a>&nbsp;Pubs are trickle
          down, Dems are ubi-bail-out, Berts are fractional-reserve hypocrites
          and&nbsp;
          <a href="https://micro-theory.com">Savers are fair & honest</a>&nbsp;
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
          it is $25 for 7 years or it is nonconsensually-diluting&nbsp;
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
          Nick Carducci: everyone???s goes up if it is indexed against
          larger-assets and larger-shared-accounts while cash:debt decreases.
          Good job! My policy will reverse gain/loss to cash:debt ratio since
          1908, now 1:44, so top borrowers like you aren???t shafted by other
          methods of ???forgiveness or cancel??? which is always bailout.. if no
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
          response is better and doesn???t create dependency. You???re only as good
          as your creativity in making your own mRNA. Couple that with the fact
          that condensation happens, you can boot the duress of entry without
          having to weigh the rights of individuals to business.......
          <br />
          <br />
          You shouldn???t be forced to take any vaccine to get into school if
          condensation, and symptoms
          <br />
          <br />
          Discreet-state is to partial-derivative, as individual is to
          population @lexfridman unless you???re of the
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
          Minnesota???s inculpability for George Floyd???s death #ChauvinTrial
          <br />
          <br />
          . @seanspicer if you aren???t deep state blink twice or have a segment
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
            - to&nbsp;
            <a
              style={{ color: "grey" }}
              href="https://www.prweb.com/releases/new_study_identifies_mental_health_as_a_risk_factor_for_covid_19/prweb17836314.htm"
            >
              get into my events
            </a>
            ,&nbsp;
            <a
              style={{ color: "grey" }}
              href="https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/semen-has-more-benefits-than-you-think/articleshow/55725846.cms"
            >
              it is healthy
            </a>
            .&nbsp;If you are polish-italian american&nbsp;
            <a
              style={{ color: "grey" }}
              href="https://twitter.com/viathumbprint/status/1382342045889609730?s=20"
            >
              under 40
            </a>
            , you can come into&nbsp;
            <a href="https://wavv.art">thumbprint.us</a>&nbsp;without the jab
            (my d***)
          </h1>
          <a href="https://www.youtube.com/watch?v=Gp5WEeQi6jE">
            Geraldo Rivera
          </a>
          : After 20 years-#AfghanistanWar is a lost cause. Why stay? We can???t
          remake the nature of this brutal, opium-addicted, primitive society.
          If international terrorists seek to use it as a base for operations,
          our drones can wreak havoc from above. Otherwise, it???s 'endless war.'"
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
            ???$2.3t isn???t going to be paid in the end, but we want it in the end???
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
          Does it&nbsp;<a href="https://magnate.company">take</a>&nbsp;more
          people to run solar and wind energy than gas and coal?
          <br />
          <br />
          All the&nbsp;
          <a href="https://www.flightsimulator.com/">
            governments
            {/* beiber/drugs, march2020SuperclusterMapboxUberReactGL*/}
          </a>
          &nbsp;buy each others??? debt, which they use to gather assets (and
          labor) from individuals @cnn @TheJusticeDept @un
          <br />
          <br />
          ???All had big hearts and even bigger appetites to make the federal
          government more accessible and understandable to the millions of
          people who rely on it.??? Dollar-splitting-labor to goose prices on
          living is why people rely on it. It???s dependence @usds @ftc
          <br />
          <br />
          9/11 was obviously insurance and risk fraud (kneecap-bat-,
          bail-strike-, property-destruction-threat). the hijackers left their
          passports behind? UK news reporting Tower 3 before it is demolished?
          Planes slice through front then bounce off floor, with&nbsp;
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
          ???$2.3t isn???t going to be paid in the end, but we want it in the end??? -
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
            &nbsp;
            <a href="https://www.cnet.com/personal-finance/stimulus-checks-and-your-taxes-what-you-need-to-know-when-you-file-your-2020-tax-return/">
              abject fraud by you! @USTreasury @ftc
            </a>
            <br />
            are you intending to not include this stimulus payment in the
            historical spending? @potus @IRSnews @OversightDems&nbsp;
            <a href="https://billbiden.org">Bail-Out- @JoeBiden</a>&nbsp;and
            @BarackObama at your scourge
          </div>
          <br />
          Kamala called border agents Kkk ???2x preg-death by afro/hispanic???
          Justice [force, how] violence [sid]
          <br />
          <br />
          ???Can???t get paid without a house bank??? - boehnor ???1,802 bounced
          checks.??? Impeachable offense raped with teeth around dick
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
          ???[Dismissivisity is the worst,]??? that???s true bro
          <br />
          <br />
          Misinformation is illegal, counterfeit-wagering and&nbsp;
          <a href="https://saverparty.xyz">colonialism rent-seeking</a>&nbsp;is
          illegal #MinnesotaIsGuilty #ChauvinTrial
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
          ???I wish [Iran] well but they will not embrace liberty soon, so it???s ok
          to use the constitution to be hostile internationally??? -
          @charliekirk11
          <br />
          <br />
          Every-white-collar-crime,&nbsp;
          <a href="https://3under2.us">let him go</a>,&nbsp;
          <a href="https://vianickcarducci.medium.com/optimal-security-for-webapps-dd2a65c2418c">
            got an address
          </a>
          &nbsp;and satellite imaging globally every 10 secs @SFRCdems
          <br />
          <br />
          <h3>
            It is a waste to have any&nbsp;
            <a href="https://bankingisnot.biz">debt</a>:currency:asset, but it???s
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
            ???We can use repeat offenders. We can counter compromised databases
            for private companies??? - @cia at 2021 senate intel hearing. You use
            SSA number, address, DOB and favoriteColor instead of physicalKey or
            convictsOrAnon on cloudServers with privateKeys @logindotgov
            <br />
            <br />
            CFIUS is an international law crime, by monopsizing-profits/assets.
            It???s justified by having the best standing if repossession doesn???t
            constitute reimbursement for down-payment according to the people in
            charge @CIA who benefit from it. Bonds aren???t national security but
            ulterior
            <br />
            <br />
            Those companies are not yours but China shouldn???t be able to own
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
            &nbsp;fraud or non-free-rider-immutable tax to create embedded
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
          much more than monetary minus housing inflation how the&nbsp;
          <span style={{ textDecoration: "line-through" }}>
            ask sets the price for the bid to take
          </span>
          , now 2%
          <br />
          paying off private-debt with public credit
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
            Also, national security and&nbsp;
            <a href="https://constitutioncenter.org/interactive-constitution/amendment/amendment-xvi">
              Amendment 16
            </a>
            &nbsp;evidently take precedence over&nbsp;
            <a href="https://www.ftc.gov/tips-advice/competition-guidance/guide-antitrust-laws/antitrust-laws">
              Anti-Trust Monopsony
            </a>
            &nbsp;
            <a href="https://www.investopedia.com/articles/investing/110513/utilizing-prisoners-dilemma-business-and-economy.asp">
              Duress
            </a>
            &nbsp;
            <a href="https://constitutioncenter.org/interactive-constitution/amendment/amendment-xiii">
              Slavery
            </a>{" "}
            as well as freedom of expression (Amendment 1) in leveraging other
            people's money, taking other people's money & privacy by only
            allowing evidence to be found legally through subpoena with
            notification to user and an intranet for parole-users with&nbsp;
            <a href="https://vianickcarducci.medium.com/optimal-security-for-webapps-dd2a65c2418c">
              Gov ID sign-in
            </a>
            &nbsp;for all to the untracked-internet, device-inputs and nil
            third-party sharing to respect Amendment 4 Writing for a&nbsp;
            <a href="https://constitutioncenter.org/interactive-constitution/amendment/amendment-i">
              community
            </a>
            &nbsp;can be&nbsp;
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
            Also, lying about&nbsp;
            <a href="https://www.gurufocus.com/term/Treasury%20Stock/BA/Treasury%252BStock/Boeing+Co">
              treasury
            </a>
            &nbsp;shares (under the auspices of the&nbsp;
            <a href="https://www.justice.gov/">SEC</a>&nbsp; makes them a
            non-impartial judge and defendant at their own trial for false
            advertisement of will and fraud) not being outstanding in
            price-share metrics like earnings, sales or book - or permitting
            investors to trade anonymously with exchanges and retail with
            exchanges or brokers without similar protection under the law
            (either show us 13D immediately or allow retail to hide their
            unhedged positions) in the interests of Article4;4 - is not an equal
            protection under the law, monopolistic and a strategy of colonizers
            or community-wide slave-owners. Also, selling citizens out to
            foreigners is not only involuntary trade but violation of&nbsp;
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
          their non-&nbsp;
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
          Domestic violence&nbsp;
          <a
            style={{ color: "black" }}
            href="https://constitutioncenter.org/interactive-constitution/interpretation/article-iv/clauses/42"
          >
            article4;4
          </a>
          &nbsp;can be stopped by govID && parole intranet let alone violating
          <br />
          this duressful arrangement can cause grave&nbsp;
          <a href="https://humanharvest.info">harm</a>&nbsp;of cancer from
          foreign-made antibodies and mRNA.
          https://www.nature.com/articles/cddis2016148. exclusion is slavery by
          free riders taking services of those excluded elsewhere in society
          <br />
          <a href="https://taxfoundation.org/american-rescue-plan-covid-relief/">
            $12b
          </a>
          &nbsp;for public health records and exclusion by
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
          Now they are calling the dollar-split + unrequited borrowers???
          customers??? consent to trade and serve in contract, a reconciliation
          package at Newsmax, instead of fraud for invoices and
          rental-colonialists prohibiting price-elasticity: you need to be sued
          <br />
          <br />
          <a href="https://wavv.art/Iran">Islam</a>&nbsp;says&nbsp;
          <a href="https://www.youtube.com/watch?v=Gp5WEeQi6jE">
            trespassing (2006 Geraldo Opium US-Afghanistan report)
          </a>
          &nbsp;is ok to war others, but uselessly abuse animals which is never
          supported by westerners; however, obviously China feels the same about
          a b**********g animals for some etherial effect. G-d is supposed to do
          the judgement is something they misinterpret about their own text.
          amazing. I am listening to John Bachelor now. Jews for reparations
          were excluded from being bankers, that is not the way; then jews
          supported british winning of lybia over italy. looking at italian
          intent there now.... yup, financial
          slavery.??http://cup.columbia.edu/book/conflict-conquest-and-conversion/9780231138642
          ??this is not the teachings of Christ and/or G-d. The Rev and the Rabbi
          just said the Third Reich rose to power because the axis thought Jews
          were different AND thought Jews were the cause of ???woes??? in Europe.
          Different how? Placing interest on non-Jews (Hakahla)? Insurance pool
          duress hot potato? That quite literally does cause dominoes of
          foreclosures. Believe me I am a home builder. Although Killing Jesus
          with Roman gov for protesting animal sacrifice and unequal treatment
          of money and share, or ???cheering for British win in Tunisia??? doesn???t
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
          ???We need to win this competition in indexing, remove bureaucracy in
          gaining resources??? Dept.Def 3.4% Budget AI R&D of Budget (+1.2%, +16%
          max) "talent, ethics & international politics" for 'AI' population
          surveillance, cut civil priorities, values, technological platforms
          that bring these technologies (input-cost monopsony)
          <br />
          <br />
          ???There is no zero rate tax [interest per time not royalty, maybe when
          royalty exclusively allowed, there are like-4 free-rider-immutable
          things. - Larry Kublow
          <br />
          <br />
          It is a waste to have any debt:currency:asset, but it???s a waste to not
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
            Not buying Russian bonds doesn???t hurt their economy, the supply is
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
            It???s little descriptive though no? @logindotgov @uspto : shouldn???t
            you be http://lightte.ch [check on this later, need to deploy, ngo
            (non-serflord, http://nationalsecuritycasino.com banksquattership,
            rentier-colonialism and compete consumer) definitions of wage or
            profit commitment]
          </div>
        </div>
      </div>
    );
  }
}
