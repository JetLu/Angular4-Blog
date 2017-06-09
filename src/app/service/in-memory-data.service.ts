import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }

  createDb() {
    // 博客信息
    const blogs = [
      { id: 11, title: '世界杯在2018年莫斯科举行，今年的冠军是哪个国家呢？', describe: '', tag: ["新闻", "世界杯", "速记"], content: '世界杯在2018年莫斯科举行，今年的冠军是哪个国家呢？世界杯在2018年莫斯科举行，今年的冠军是哪个国家呢？世界杯在2018年莫斯科举行，今年的冠军是哪个国家呢？世界杯在2018年莫斯科举行，今年的冠军是哪个国家呢？', createdTime: '2017-06-07 16:17:41', viewCount: '2', author: 'admin' },
      { id: 12, title: '世界杯在2018年莫斯科举行，哪个国家最具有潜质？', describe: '', tag: [], content: '世界杯在2018年莫斯科举行，哪个国家最具有潜质？世界杯在2018年莫斯科举行，哪个国家最具有潜质？世界杯在2018年莫斯科举行，哪个国家最具有潜质？', createdTime: '2017-06-06 16:17:41', viewCount: '2', author: 'admin' },
      { id: 13, title: '世界杯在2018年莫斯科举行，最精彩的球队是哪一只？', describe: '', tag: [], content: '世界杯在2018年莫斯科举行，哪个国家最具有潜质？世界杯在2018年莫斯科举行，哪个国家最具有潜质？世界杯在2018年莫斯科举行，哪个国家最具有潜质？', createdTime: '2017-06-07 12:17:41', viewCount: '3', author: 'admin' },
      { id: 14, title: '世界杯在2018年莫斯科举行，表现最佳的球员是谁？', describe: '', tag: [], content: '世界杯在2018年莫斯科举行，哪个国家最具有潜质？世界杯在2018年莫斯科举行，哪个国家最具有潜质？世界杯在2018年莫斯科举行，哪个国家最具有潜质？', createdTime: '2017-06-07 06:17:41', viewCount: '4', author: 'admin' },
      { id: 15, title: '世界杯在2018年莫斯科举行，亚洲有几只球队参赛？', describe: '', tag: [], content: '世界杯在2018年莫斯科举行，哪个国家最具有潜质？世界杯在2018年莫斯科举行，哪个国家最具有潜质？世界杯在2018年莫斯科举行，哪个国家最具有潜质？', createdTime: '2017-06-05 16:17:41', viewCount: '55', author: 'admin' },
      { id: 16, title: '世界杯在2018年莫斯科举行，中国能够参加世界杯吗？', describe: '', tag: [], content: '世界杯在2018年莫斯科举行，哪个国家最具有潜质？世界杯在2018年莫斯科举行，哪个国家最具有潜质？世界杯在2018年莫斯科举行，哪个国家最具有潜质？', createdTime: '2017-06-04 16:17:41', viewCount: '43', author: 'admin' },
      { id: 17, title: '世界杯在2018年莫斯科举行，巴西会夺冠吗？', describe: '', tag: [], content: '世界杯在2018年莫斯科举行，哪个国家最具有潜质？世界杯在2018年莫斯科举行，哪个国家最具有潜质？世界杯在2018年莫斯科举行，哪个国家最具有潜质？', createdTime: '2017-06-02 16:17:41', viewCount: '27', author: 'admin' },
      { id: 18, title: '世界杯在2018年莫斯科举行，德国队、巴西队和阿根廷队这三个哪个会夺冠呢？', describe: '', tag: [], content: '世界杯在2018年莫斯科举行，哪个国家最具有潜质？世界杯在2018年莫斯科举行，哪个国家最具有潜质？世界杯在2018年莫斯科举行，哪个国家最具有潜质？', createdTime: '2017-06-01 16:17:41', viewCount: '22', author: 'admin' },
      { id: 19, title: '积极参与赛事吧！', describe: '', tag: [], content: '世界杯在2018年莫斯科举行，哪个国家最具有潜质？世界杯在2018年莫斯科举行，哪个国家最具有潜质？世界杯在2018年莫斯科举行，哪个国家最具有潜质？', createdTime: '2017-06-01 06:17:41', viewCount: '28', author: 'admin' }
    ];

    // 评论信息
    const comments = [
      { id: 11, postId: '11', createdTime: '2017-06-01 12:17:41', content: '回复内容回复内容回复内容回复内容1', reviewer: '张三' },
      { id: 12, postId: '11', createdTime: '2017-06-02 12:17:41', content: '回复内容回复内容回复内容回复内容3222222', reviewer: '王五' },
      { id: 13, postId: '11', createdTime: '2017-06-03 12:17:41', content: '回复内容回复内容回复内容回复内容33333333', reviewer: '李四' },
      { id: 14, postId: '11', createdTime: '2017-06-04 12:17:41', content: '回复内容回复内容回复内容回复内容444444444', reviewer: '张三' },
      { id: 15, postId: '12', createdTime: '2017-06-05 12:17:41', content: '回复内容回复内容回复内容回复内容5666666', reviewer: '张三' },
      { id: 16, postId: '12', createdTime: '2017-06-06 12:17:41', content: '回复内容回复内容34343434343434回复内容回复内容', reviewer: '张三1' },
      { id: 17, postId: '12', createdTime: '2017-06-07 12:17:41', content: '回复内容回复内容544444回复内容回复内容', reviewer: '张三2' },
      { id: 18, postId: '13', createdTime: '2017-06-08 12:17:41', content: '回复内容回复内容回67676767676767复内容回复内容', reviewer: '李四' },
      { id: 19, postId: '13', createdTime: '2017-06-09 12:17:41', content: '回复内容回复内容7688回复内容回复内容', reviewer: '李四2' },
      { id: 20, postId: '13', createdTime: '2017-06-20 12:17:41', content: '回复内容回复内容7878787878787878787878回复内容回复内容', reviewer: '王五' }
    ];

    return { blogs, comments };
  }
}
