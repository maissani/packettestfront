//#region Global Imports
import * as React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as d3 from "d3";
import { bindActionCreators, Dispatch } from 'redux';
//#endregion Global Imports

//#region Local Imports
import './style.scss';
//#endregion Local Imports

//#region Interface Imports
import { IDiagram } from '@Interfaces';
//#endregion Interface Imports

class Diagram extends React.Component<IDiagram.IProps, IDiagram.IState> {
	graph: React.RefObject<unknown>;

	constructor(props: IDiagram.IProps) {
		super(props);

		this.state = {
			width: 700,
			height: 500,
			mock: [[0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0 ],[0,0,0,0,0,0,1,0,0]]
		};
		this.graph = React.createRef();
	}

	drawChart() {
    const data = [12, 5, 6, 6, 9, 10];
			
			const width =  this.state.width;
			const height =  this.state.height
			const duration = 750;
			let graph = ReactDOM.findDOMNode(this.refs.graph)
			console.log(graph)
			const svg = d3.select(this.graph.current).attr("viewBox", [-10, -10, width, height]);
			const layoutTree = d3.tree().size([width - 20, height - 20]);
			const renderLink = d3.linkVertical().x(d => d.x).y(d => d.y);
			const Node = d3.hierarchy.prototype.constructor;
			const root = new Node;
			const nodes = [root];
			const bluelinks = [];
			const redlinks = [];

			layoutTree(root);
		
		let redLink = svg.append("g")
			.attr("fill", "none")
			.attr("stroke", "#F00")
			.selectAll(".link");
	
		let blueLink = svg.append("g")
			.attr("fill", "none")
			.attr("stroke", "#00F")
			.selectAll(".link");

		let node = svg.append("g")
			.attr("stroke", "#fff")
			.attr("stroke-width", 2)
			.selectAll(".node");
				
		for (var i = 0; i < 8; i++) {
				const parent = nodes[i];
				const childX = Object.assign(new Node, {parent, depth: parent.depth + 1});
				const childO = Object.assign(new Node, {parent, depth: parent.depth + 1});
				if (parent.children) {
					parent.children.push(childX)
					parent.children.push(childO)
				} else parent.children = [childX, childO];
				nodes.push(childX);
				nodes.push(childO);
				bluelinks.push({source: parent, target: childX});
				redlinks.push({source: parent, target: childO});
		}

				// Recompute the layout.
		layoutTree(root);
		
				// Add entering nodes in the parent’s old position.
		node = node.data(nodes);
		node = node.enter().append("circle")
			.attr("class", "node")
			.attr("r", 4)
			.attr("cx", d => d.parent ? d.parent.px : d.px = d.x)
			.attr("cy", d => d.parent ? d.parent.py : d.py = d.y)
			.merge(node);

		// Add entering links in the parent’s old position.
		blueLink = blueLink.data(bluelinks);
		redLink = redLink.data(redlinks);

		svg.append("svg:defs").append("svg:marker")
			.attr("id", "triangle")
			.attr("refX", 15)
			.attr("refY", 6)
			.attr("markerWidth", 60)
			.attr("markerHeight", 60)
			.attr("orient", "auto")
			.append("path")
			.attr("d", "M 0 0 12 6 0 12 3 6")
			.style("fill", "black");

		blueLink = blueLink.enter().insert("path", ".node")
			.attr("class", "link")
			.attr("d", d => {
				const o = {x: d.source.px, y: d.source.py};
				return renderLink({source: o, target: o});
			}).attr("marker-end", "url(#triangle)")
			.merge(blueLink);

		redLink = redLink.enter().insert("path", ".node")
			.attr("class", "link")
			.attr("d", d => {
				const o = {x: d.source.px, y: d.source.py};
				return renderLink({source: o, target: o});
			}).attr("marker-end", "url(#triangle)")
			.merge(redLink);	
		// Transition nodes and links to their new positions.
		const t = svg.transition()
			.duration(duration);
		
		blueLink.transition(t)
			.attr("d", renderLink);
		redLink.transition(t)
			.attr("d", renderLink);
		node.transition(t)
			.attr("cx", d => d.px = d.x)
			.attr("cy", d => d.py = d.y);
		return svg.node();
	}

	componentDidMount() {
    this.drawChart();
  }

	public render(): JSX.Element {
		const { width, height } = this.state
		return (
			<div className="Diagram">
				<svg width={width} height={height}>
            <g ref={this.graph} />
        </svg>
			</div>
		);
	}
}

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Diagram);

