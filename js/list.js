mui.init({
	pullRefresh : {
	    container:"#app",//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
	    down : {
	      height:50,//可选,默认50.触发下拉刷新拖动距离,
	      auto: false,//可选,默认false.首次加载自动下拉刷新一次
	      contentdown : "下拉可以刷新",//可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
	      contentover : "释放立即刷新",//可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
	      contentrefresh : "正在刷新...",//可选，正在刷新状态时，下拉刷新控件上显示的标题内容
	      callback :pullfreshFn1 //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
	    },
	    up : {
	      height:50,//可选.默认50.触发上拉加载拖动距离
	      auto:false,//可选,默认false.自动上拉加载一次
	      contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
	      contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
	      callback :pullfreshFn2 //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
	    }
  	}
})

function pullfreshFn1 () {
	console.log('222');
	setTimeout(function(){
		mui('#app').pullRefresh().endPulldown(); 
	}, 1000);
}

function pullfreshFn2 () {
	setTimeout(function(){
		mui('#app').pullRefresh().endPullup(); 
	}, 1000);
}

mui.plusReady(function () {
	mui('.mui-table-view').on('click', '.mui-table-view-cell', function () {
		var type = this.getAttribute('type');
		var name = this.getAttribute('name');
		
		mui.openWindow({
			url: 'detail.html',
			id: 'detail',
			styles: {
				top: '0',
				bottom: '50px'
			},
			
			extras: {
				infoType: type,
				infoName: name,
			},
			
			show: {
				autoShow: true,
				aniShow: 'slide-in-left',
				duration: 1000
			},
			
			waiting: {
				title: '加载中....'
			}
		})
		
	})
})

var vm = new Vue({
	el: '#app',
	data: {
		list: []
	},
	
	methods: {
		getList: function() {
			var that = this;
			mui.get('http://route.showapi.com/126-2', {
				showapi_appid: 79191,
				showapi_sign: '008e43cebaad45d2ab8150f3163a667c'
			},function (result) {
				if (result.showapi_res_code === 0) {
					that.list = result.showapi_res_body.pagebean.contentlist;
				}else {
					mui.toast(result.showapi_res_error)
				}
			})
		}
	},
	
	created: function () {
		this.getList();
	}
})


