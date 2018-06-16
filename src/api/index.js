import axios from 'axios';

const ERR_OK = '0000';

// 首页教员推荐信息推荐
let tutorDetailRecommend = () => axios({
  method: 'post',
  url: '/api/TutorDetailInfo/tutorDetailInfoFour.do'
});

// 查询教员信息列表
let tutorList = data => axios({
  method: 'post',
  url: '/api/TutorDetailInfo/tutorDetailInfoList.do',
  params: data
});

// 查询单个教员详细信息
let tutorDetail = userId => axios({
  method: 'post',
  url: '/api/TutorDetailInfo/tutorDetail.do',
  params: {
    userId: userId
  }
});

// 查询招聘信息列表
let recruitList = data => axios({
  method: 'post',
  url: '/api/RecruitInfo/recruitInfoList.do',
  params: data
});

// 查询单个招聘详细信息
let recruitDetail = recruitId => axios({
  method: 'post',
  url: '/api/RecruitInfo/recruitDetailInfo.do',
  params: {
    recruitId: recruitId
  }
});

// 将方法暴露出去
export {
  ERR_OK,
  tutorDetailRecommend,
  recruitList,
  tutorList,
  tutorDetail,
  recruitDetail
};
