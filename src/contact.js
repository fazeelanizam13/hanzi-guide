import React, { Component } from 'react'
import {Para, Back} from './stuff';
import Home from './home';

const stuffHome = {
	txt1: "Chinese Characters (<span lang='zh-Hans'>汉字</span> or hàn-zì) are logograms developed for the writing of Chinese language.",
	txt2: "While there's no 'alphabet' in Chinese, each character corresponds to a single syllable, and most modern Chinese words are made up of two or more of them.<br />Since each Chinese character is also a morpheme (the smallest meaningful unit in a language,) it is essential knowledge for a Chinese language learner to know what each character stands for.",
	txt3: "Type a character:"
}

var comp = Home

class Contact extends Component{
    render(){
        return(
        <>
                <div className="content char">
                    <Para txt={this.props.title} />
                </div>

                <div className="content">
                    <ul>
                        <li><Para txt={this.props.para1} className="left-align" /></li>
                        <li><Para txt={this.props.para2} className="left-align" /></li>
                        <li><Para txt={this.props.para3} className="left-align" /></li>
                        <li><Para txt={this.props.para4} className="left-align" /></li>
                    </ul>
                </div>

                <Back dest="/" comp={comp} props1={stuffHome} />
        </>
        );
    }
}

export default Contact