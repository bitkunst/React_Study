import React, {Component} from 'react'

class CommentList extends Component {

    /* 
        CommentList에서 상태를 만들었다면,,
        data를 뿌리는 것은 엄청 쉽다.

        하지만 CommentForm과 같이 생각을 해봐야한다.

        부모 컴포넌트인 Comment 컴포넌트에서 상태를 만들줘야 한다.
        현재는 children을 사용하고 있기 때문에 props를 전달해야 하는 이슈가 있어서 최상위 컴포넌트인 App에서 상태를 만들어 주었다.
    */

    item = () => { 
        return (
            this.props.list.map( (v,k) => {
                return (
                    <ul className='comment-row' key={k}>
                        <li className='comment-id'>{v.userid}</li>
                        <li className='comment-content'>{v.content}</li>
                        <li className='comment-date'>{v.date}</li>
                    </ul>
                )
            })
        ) 
    }
    

    render() {
        return(
            <li>
                {this.item()}
            </li>
        )
    }
}

export default CommentList;