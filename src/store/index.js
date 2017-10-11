
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		n:0,  //轮播图第几张
		photoData:[],  //one图文数据
		sliderData:[],   //阅读轮播图数据
		sliderDetail:[],  //点击后的轮播图详细数据
		readData:{}, //阅读列表数据
		readDetail:[],  //点击后的阅读详细数据
		data:{},  //短篇详情内容
		type:{}, //文章类型和item.id
		comment:[],
		commentLength:0,
		musicData:[],
		userData:[], //所有用户数据
		nowUser:{},  //现在用户
	},
	getters:{
		sliderData(state){
			return state.sliderData
		},
		photoData(state){
			return state.photoData
		},
		sliderDetail(state){
			// 0：图文
			// 1：阅读
			// 2：连载
			// 3：问答
			// 4：音乐
			// 5：电影
			// 6：广告
			state.sliderDetail.forEach((item,index)=>{
				if (item.type == 1) {
					state.sliderDetail[index].character = '短篇'
					state.sliderDetail[index].manual = 'essay'
				} else if(item.type == 2) {
					state.sliderDetail[index].character = '连载'
					state.sliderDetail[index].manual = 'serialcontent'
				} else if (item.type == 3) {
					state.sliderDetail[index].character = '问答'
					state.sliderDetail[index].manual = 'question'
				} else if (item.type == 4) {}
			})
			return state.sliderDetail
		},
		data(state){
			return state.data
		},
		comment(state){
			return state.comment
		},
		commentLength(state){
			return state.commentLength;
		},
		readData(state){
			return state.readData;
		},
		readDetail(state){
			return state.readDetail;
		},
		musicData(state){
			return state.musicData;
		}

	},

	mutations: {
		updatePhotoList(state,data){
			state.photoList = data.data;
		},
		updatephotoData(state,data){
			state.photoData.push(data.data);
			state.photoData.sort((a,b)=>{
				return b.hpcontent_id - a.hpcontent_id;
			})
		},
		updateSliderList(state,data){
			state.sliderData = data.data;

		},
		updateSliderDetail(state,data){
			state.sliderDetail = data.data;
		},
		updateIndex(state,data){
			state.n = data;
		},
		updateReadList(state,data){
			state.readData = data.data;
		},
		updateReadDetail(state,data){
			state.readData = data.data;
		},
		updateData(state,data){
			state.data = data.data;
		},
		updateType(state,data){
			state.type = data;
		},
		updateComment(state,data){
			state.comment.push(...data.data.data);
			state.commentLength = data.data.count;
		},
		updateMusicData(state,data){
			state.musicData.push(data.data)
		},
		saveUserInfo(state,data){
			state.nowUser = data;
			state.userData.push(data);
		},
		clearUserInfo(state,data){
			state.nowUser = {};
		}
	},
	actions:{
		getList(store) {
		    fetch('/api/api/hp/idlist/0')
		        .then( response => {
		            return response.json();
		        }).then(data => {
		        	for (var i = 0; i < data.data.length; i++) {
		        		fetch(`/api/api/hp/detail/${data.data[i]}`)
		        		.then( response => {
		        			return response.json();
		        		}).then(data => {
		        			store.commit('updatephotoData',data)
		        		})
		        	}
		        })
		},
		getSliderList(store) {
			fetch('/api/api/reading/carousel')
		    .then( response => {
		        return response.json();
		    }).then(data => {
		    	store.commit('updateSliderList',data)
		    	
		    })
		},
		getSliderDetail(store,id) {
			fetch(`/api/api/reading/carousel/${id}`)
		    .then( response => {
		        return response.json();
		    }).then(data => {
		    	store.commit('updateSliderDetail',data)
		    })
		},
		getReadList(store,data) {
			fetch(`/api/api/reading/index`)
		    .then( response => {
		        return response.json();
		    }).then(data => {
		    	store.commit('updateReadList',data)
		    })
		},
		getDetail(store,data) {
			fetch(`/api/api/${data.type}/${data.id}`)
			.then(response => {
				 return response.json();
				}).then(data => {
					store.commit('updateData',data)
				})
		},
		getComment(store,data) {
			fetch(`/api/api/comment/praiseandtime/${data.manual}/${data.id}/${data.index}`)
			.then(response => {
				 return response.json();
				}).then(data => {
					store.commit('updateComment',data)
				})
		},
		getMusicList(store){
			fetch(`/api/api/music/idlist/0`)
			.then(response => {
				 return response.json();
				}).then(data => {
					for (var i = 0; i < data.data.length; i++) {
						fetch(`/api/api/music/detail/${data.data[i]}`)
						.then( response => {
							return response.json();
						}).then(data => {
							store.commit('updateMusicData',data)
						})
					}
					
				})
		}

		
	}
})

export default store