import resource from '../config/resource'

/**
 * H5餐厅列表
 * stList.vue
 */
export const restaurantsList = (p) => resource('get','/h5/recommend-tool/restaurants',p);

/**
 * H5菲旅行指南列表
 * stList.vue
 */
export const travelsList = (p) => resource('get','/h5/recommend-tool/travels',p);

/**
 * H5汇率（汇率大全）
 * stExchangeRate.vue
 */
export const exchangeObj = (p) => resource('get','/h5/recommend-tool/money-exchange',p);

/**
 * H5汇率更新列表（汇率电报群）
 * stExchangeRate.vue
 */
export const exchangeLog = (p) => resource('get','/h5/recommend-tool/money-exchange-log',p);

/**
 * 下载页
 * download.vue
 */
export const getdownloadLink = () => resource('get','/h5/about/download');

/**
 * 安全协议页
 * download.vue
 */
export const getPrivacy = () => resource('get','/h5/about/privacy');

/**
 * 分享页
 * download.vue
 */
export const getShare = (p) => resource('get','/h5/post/view',p);