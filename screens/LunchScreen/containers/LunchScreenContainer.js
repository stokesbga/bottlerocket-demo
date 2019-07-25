import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import LunchActions from "../../../modules/lunch";
import _ from "lodash";

import LunchScreenView from "../components/LunchScreenView";

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(LunchActions, dispatch)
});

const mapStateToProps = ({ lunch }) => lunch;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LunchScreenView);
