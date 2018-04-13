
import React from "react";
import Header from "../header";
import Loading from "../loading";
import "./index.css";


module.exports = React.createClass({
	getInitialState:function() {
		return { 
			datas:[],  //接口返回数据
			isLoading:true   //是否loading
		}
	},
	componentDidMount:function(){
		this.getData();
	},
	//获取数据
	getData:function(){
		var _this = this;
		//var url = dxlHttp.my +"ucenterjsonp/?act=rewards&callback=?";
		var url = dxlHttp.my +"ucenterjsonp/?act=appointment&type=hotel&callback=?";

		$.getJSON(url,function(d){
			if(d.code == 0){
				_this.setState({
					datas:_this.serializeData(d.detail.albums),
					isLoading:false
				});
			}
		})
	},
	//统一数据格式
	serializeData:function(data){
		data = data || [];
		return data.map(function(n,i){
			/*return{
				title:n.remark,
				payment:n.trade_no,
				time:n.time,
				price:n.amount.indexOf('-')!=-1 ? n.amount.substring(1) : n.amount,
				priceDomClass:n.amount.indexOf('-')!=-1 ? "pay" : "income"
			}*/
			return{
				title:n.appointment_status,
				payment:n.appointment_status,
				time:n.appointment_status,
				price:n.appointment_status,
				priceDomClass:"income"
			}
		})
	},
	render:function() {
		return (
			<div className="rewards">
				<Header title="我的返现" url="#/"/>
				<div className="main">
					<div className="rewards-info">可用额度：
						<strong className="price"></strong>
					</div>
					<div className="rewards-list" ref="rewards-list">
						<MyList datas={this.state.datas} isLoading={this.state.isLoading}/>
					</div>
				</div>
			</div>
		);
	}
});

var MyList = React.createClass({
	render:function(){
		var dataLength = this.props.datas.length;

		if(this.props.isLoading){
			return <Loading/>
		}

		if(dataLength>0){
			return(
				<ul>
					{
						this.props.datas.map(function(n,i){
							return(
								<li key={i}>
									<h3 className="title">{n.remark}</h3>
									<p className="payment">支付单：{n.trade_no}</p>
									<p className="time">时间：{n.time}</p>
									<span className={n.priceDomClass}><i>＋</i><dfn>&yen;</dfn>{n.price}</span>
								</li>
							)
						})
					}
				</ul>
			)
		}else{
			<div className="no-list"><p>暂无返现~</p></div>
		}
	}
})




