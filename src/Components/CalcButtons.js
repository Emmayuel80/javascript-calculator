import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export default class Buttons extends React.Component {
  render() {
    return (
      <Paper>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              id="clear"
              onClick={this.props.initialize}
              value="AC"
            >
              AC
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="secondary"
              id="divide"
              onClick={() => this.props.operators("/")}
              value="/"
            >
              /
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="secondary"
              id="multiply"
              onClick={() => this.props.operators("x")}
              value="x"
            >
              x
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              id="add"
              onClick={() => this.props.operators("+")}
              variant="contained"
              color="secondary"
              value="+"
            >
              +
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              id="subtract"
              onClick={() => this.props.operators("-")}
              value="‑"
            >
              ‑
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              id="seven"
              onClick={() => this.props.numbers("7")}
              variant="contained"
              color="primary"
              value="7"
            >
              7
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              id="eight"
              onClick={() => this.props.numbers("8")}
              variant="contained"
              color="primary"
              value="8"
            >
              8
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              id="nine"
              onClick={() => this.props.numbers("9")}
              variant="contained"
              color="primary"
              value="9"
            >
              9
            </Button>
          </Grid>

          <Grid item xs={4}>
            <Button
              id="four"
              onClick={() => this.props.numbers("4")}
              variant="contained"
              color="primary"
              value="4"
            >
              4
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              id="five"
              onClick={() => this.props.numbers("5")}
              variant="contained"
              color="primary"
              value="5"
            >
              5
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              id="six"
              onClick={() => this.props.numbers("6")}
              variant="contained"
              color="primary"
              value="6"
            >
              6
            </Button>
          </Grid>

          <Grid item xs={4}>
            <Button
              id="one"
              onClick={() => this.props.numbers("1")}
              variant="contained"
              color="primary"
              value="1"
            >
              1
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              id="two"
              onClick={() => this.props.numbers("2")}
              variant="contained"
              color="primary"
              value="2"
            >
              2
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              id="three"
              onClick={() => this.props.numbers("3")}
              variant="contained"
              color="primary"
              value="3"
            >
              3
            </Button>
          </Grid>

          <Grid item xs={4}>
            <Button
              id="decimal"
              onClick={this.props.decimal}
              variant="contained"
              color="primary"
              value="."
            >
              .
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              className="jumbo"
              id="zero"
              onClick={() => this.props.numbers("0")}
              value="0"
            >
              0
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              id="equals"
              onClick={this.props.evaluate}
              variant="contained"
              color="secondary"
              value="="
            >
              =
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
