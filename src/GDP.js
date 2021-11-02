import React from "react";
import { gdpdata, popdata } from "./data";
//import { Line } from "react-svg-curve";

class GDPchild extends React.Component {
  constructor(props) {
    super(props);

    let testingData = [];
    let testing = [];
    let noData = [];
    let date = [];
    var no = [];
    props.data.map((x) => {
      date.push(x.year);
      const gdppop = x.num / x.pop;
      testing.push(gdppop);
      testingData.push([x.year, gdppop]);
      no.push(0);
      return noData.push([x.year, 0]);
    });
    var highDate = Math.max(...date);
    var lowTesting = Math.min(...testing);
    var lowDate = Math.min(...date);
    var highTesting = Math.max(...testing);
    noData.sort((a, b) => a[0] - b[0]);
    testingData.sort((a, b) => a[0] - b[0]);

    var state = {
      chosenDecade: 2000,
      highTesting,
      testingData,
      noData,
      yAxis: highTesting - lowTesting,
      xAxis: highDate - lowDate,
      lowTesting,
      highDate,
      lowDate
    };
    this.state = state;
  }
  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props) {
      let testingData = [];
      let testing = [];
      let noData = [];
      let date = [];
      var no = [];
      this.props.data.map((x) => {
        date.push(x.year);
        const gdppop = x.num / x.pop;
        testing.push(gdppop);
        testingData.push([x.year, gdppop]);
        no.push(0);
        return noData.push([x.year, 0]);
      });
      var highDate = Math.max(...date);
      var lowTesting = Math.min(...testing);
      var lowDate = Math.min(...date);
      var highTesting = Math.max(...testing);
      noData.sort((a, b) => a[0] - b[0]);
      testingData.sort((a, b) => a[0] - b[0]);
      this.setState({
        highTesting,
        testingData,
        noData,
        yAxis: highTesting - lowTesting,
        xAxis: highDate - lowDate,
        lowTesting,
        highDate,
        lowDate
      });
    }
  };
  render() {
    if (this.props.data) {
      return (
        <div
          style={{
            height: "500px",
            display: "flex",
            position: "relative",
            width: "100%"
          }}
        >
          <div
            style={{
              maxWidth: "50%",
              height: "min-content",
              display: "flex",
              position: "absolute",
              right: "20px",
              flexDirection: "column",
              zIndex: "1",
              backgroundColor: "rgba(250,250,250,.6)"
            }}
          >
            ${Math.round(this.state.lowTesting * 100) / 100}/person -&nbsp;
            <br />${Math.round(this.state.highTesting * 100) / 100}/person
            <div
              style={{
                height: "min-content",
                display: "flex",
                position: "relative",
                right: "0px"
              }}
            >
              {this.state.lowDate}
              &nbsp;-&nbsp;
              {this.state.highDate}
            </div>
          </div>
          {this.props.width && (
            <svg
              className="all"
              style={{
                display: "flex",
                position: "absolute",
                width: "100%",
                height: "500px",
                transform: "scale(1,-1)"
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              {
                <g>
                  {this.state.noData.map(([x, y], i) => {
                    const transformation = [
                      ((x - this.state.lowDate) / this.state.xAxis) *
                        0.9 *
                        this.props.width,
                      0 // ((y - this.state.lowTesting) / this.state.yAxis) * 150
                    ];
                    return (
                      <rect
                        x={transformation[0]}
                        y={transformation[1]}
                        width={4}
                        height="100%"
                        stroke="rgb(230,230,230)"
                        fill="grey"
                        strokeWidth={2}
                        key={i}
                      />
                    );
                  })}
                  {this.state.testingData.map(([x, y], i) => {
                    const transformation = [
                      ((x - this.state.lowDate) / this.state.xAxis) *
                        0.9 *
                        this.props.width,
                      ((y - this.state.lowTesting) / this.state.yAxis) * 150
                    ];
                    return (
                      <rect
                        x={transformation[0]}
                        y={transformation[1]}
                        width={2}
                        height="100%"
                        stroke="rgb(230,230,230)"
                        fill="rgb(230,230,230)"
                        strokeWidth={1}
                        key={i}
                      />
                    );
                  })}
                  {this.state.testingData.map(([x, y], i) => {
                    const transformation = [
                      ((x - this.state.lowTesting) / this.state.xAxis) *
                        0.9 *
                        this.props.width,
                      ((y - this.state.lowTesting) / this.state.yAxis) * 150
                    ];
                    return (
                      <rect
                        x={transformation[0]}
                        y={transformation[1]}
                        width={4}
                        height={4}
                        stroke="black"
                        fill="black"
                        strokeWidth={2}
                        key={i}
                      />
                    );
                  })}
                </g>
              }
            </svg>
          )}
          <div
            style={{
              backgroundColor: "rgba(250,250,250,0.6)",
              top: "10px",
              height: "40px",
              display: "flex",
              position: "relative",
              maxWidth: "40%",
              width: "250px",
              left: "2px",
              zIndex: "0",
              overflowX: "auto",
              overflowY: "hidden"
            }}
          >
            <div
              style={{
                fontSize: "15px",
                display: "flex",
                position: "absolute",
                width: "max-content"
              }}
            >
              Gross Domestic Product per population/person/cohort/capita
              {/*<div style={{ width: "min-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "orange"
                  }}
                />
                covid19&nbsp;(+)&nbsp;&nbsp;
              </div>
              <div style={{ width: "min-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "black"
                  }}
                />
                num
                </div>*/}
            </div>
          </div>
        </div>
      );
    } else return null;
  }
}

class GDP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDecade: 2000,
      chosenDecadeInx: popdata.length,
      data: gdpdata.map((x) => {
        var foo = { ...x };
        var thisdecade = popdata.find(
          (p) => x.year - p.year < 10 && x.year - p.year > -1
        );
        foo.num = foo.num * 1000000000;
        var addi = thisdecade.pop * ((x.year - thisdecade.year) / 10);
        foo.pop = thisdecade.pop + addi;
        return foo;
      }),
      chosenState: "Florida",
      last: 1000,
      crime: true
    };
  }
  componentDidUpdate = (prevProps) => {
    if (this.state.chosenDecadeInx !== this.state.lastChosenDecadeInx) {
      // var chosenstate = [].find((x) => x.name === this.state.chosenState);
      this.setState(
        { lastChosenDecadeInx: this.state.chosenDecadeInx },
        async () => {
          const copy = gdpdata.map((x) => {
            var foo = { ...x };
            var b4Idx = null;
            var thisdecade = popdata.find((p, i) => {
              b4Idx = i;
              return x.year - p.year < 10 && x.year - p.year > -1;
            });
            foo.num = foo.num * 1000000000;
            var b4pop = popdata[b4Idx - 1] ? popdata[b4Idx - 1].pop : 0;
            var b4year = popdata[b4Idx - 1] ? popdata[b4Idx - 1].year : 0;
            var addi = (thisdecade.pop - b4pop) * ((x.year - b4year) / 10);
            foo.pop = thisdecade.pop + addi;
            return foo;
          });
          this.setState({
            data: copy.filter((x) => x.year < this.state.chosenDecade + 1)
          });
        }
      );
    }
  };
  render() {
    const { data } = this.state;
    /*var statesAvailable = [];
    [].map((x) => {
      return statesAvailable.push(x.jurisdiction_of_occurrence);
    });
    var filteredByState = this.state.data.filter(
      (x) => x.jurisdiction_of_occurrence === this.state.chosenState
    );
    var unique = [...new Set(statesAvailable)];
    var statesGood = unique.filter((x) =>
       unique.includes(
        x.jurisdiction_of_occurrence
      )
    );*/
    //console.log(this.props.covidData);
    //if (this.state.chosenState === this.state.lastChosenState) {
    return (
      <div
        style={{
          top: "0px",
          display: "flex",
          position: "relative",
          width: "100vw",
          height: "min-content",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            position: "relative",
            top: "0px",
            height: "min-content",
            flexWrap: "wrap",
            display: "flex"
          }}
        >
          {
            //unique
            [].map((x, i) => {
              return (
                <div
                  key={i}
                  style={{
                    alignItems: "center",
                    padding: "4px 7px",
                    border:
                      this.state.chosenState === x ? "1px solid black" : "",
                    display: "flex"
                  }}
                >
                  <div onClick={() => this.setState({ chosenState: x })}>
                    {
                      //x
                    }
                  </div>
                  &nbsp;
                  {this.state.chosenState === x && (
                    <button
                      onClick={() => this.setState({ chosenState: null })}
                    >
                      &times;
                    </button>
                  )}
                </div>
              );
            })
          }
        </div>
        cases to tests
        {
          //filteredByState.length > 0 && (
          <GDPchild
            width={this.props.width}
            data={data} //filteredByState
            crime={this.state.crime}
            chosenState={this.state.chosenState}
          />
          //
        }
        <div
          style={{
            margin: "10px 50px",
            display: "flex",
            width: "70%",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{ border: "1px solid", padding: "10px", userSelect: "none" }}
            onClick={() => {
              if (this.state.chosenDecadeInx > 0)
                this.setState(
                  { chosenDecadeInx: this.state.chosenDecadeInx - 1 },
                  () => {
                    this.setState({
                      chosenDecade: popdata[this.state.chosenDecadeInx].year
                    });
                  }
                );
            }}
          >
            {"<"}
          </div>
          {this.state.chosenDecade}
          <div
            style={{ border: "1px solid", padding: "10px", userSelect: "none" }}
            onClick={() => {
              if (this.state.chosenDecadeInx < popdata.length - 1)
                this.setState(
                  { chosenDecadeInx: this.state.chosenDecadeInx + 1 },
                  () => {
                    this.setState({
                      chosenDecade: popdata[this.state.chosenDecadeInx].year
                    });
                  }
                );
            }}
          >
            {">"}
          </div>
        </div>
      </div>
    );
  }
}
export default GDP;
