/// <reference path='external/react/react.d.ts' />
/// <reference path='external/typed-react/typed-react.d.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "typed-react"], function (require, exports, React, TypedReact) {
    var Timer = (function (_super) {
        __extends(Timer, _super);
        function Timer() {
            _super.apply(this, arguments);
        }
        Timer.prototype.getInitialState = function () {
            return {
                ticksElapsed: 0
            };
        };
        Timer.prototype.tick = function () {
            this.setState({
                ticksElapsed: this.state.ticksElapsed + 1
            });
        };
        Timer.prototype.componentDidMount = function () {
            this.interval = setInterval(this.tick, this.props.tickInterval);
        };
        Timer.prototype.componentWillUnmount = function () {
            clearInterval(this.interval);
        };
        Timer.prototype.render = function () {
            return React.DOM.div(null, "Ticks Elapsed: ", this.state.ticksElapsed);
        };
        return Timer;
    })(TypedReact.Component);
    exports.timer = TypedReact.createClass(Timer);
});
//# sourceMappingURL=test.js.map