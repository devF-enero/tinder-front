import React, {useState} from "react";
import { useQuery } from '@apollo/react-hooks';
import { useMutation } from "@apollo/react-hooks";
import gql from 'graphql-tag';
import Layout from "../common/Layout";
import Card from "../components/Card";

import { FaHeart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const GET_USERS = gql`
 {
    getPossibleMatchUsers(id:"5e45fe19d97c7d3518255d79") {
      _id
      name {
        first
        last
      }
      age
    }

  }
`

const rejection = gql`
  mutation processUserRejections($id:String!,$userRejected:String!) {
    processUserRejections(id: $id, userRejected:$userRejected) {
		_id
      name {
        first
        last
      }
      age
    }
  }
`;

const like = gql`
  mutation processUserLikes($id:String!,$userLiked:String!) {
    processUserLikes(id: $id, userLiked:$userLiked) {
		_id
      name {
        first
        last
      }
      age
    }
  }
`;

function Home() {
	const [position, setPosition] = useState(0)
	const { loading, data, error } = useQuery(GET_USERS);
	const [execRejection,{data1,loading1,error1}] = useMutation(rejection) 

	const [execLike,{data2,loading2,error2}] = useMutation(like) 

	if (loading) return <h1>Cargando....</h1>
	if (error) return <p>{error.message}</p>



	const postRejection = () => {
		
		let userRejected = data.getPossibleMatchUsers[position]._id;
		if(position === data.getPossibleMatchUsers.length - 1) return;
		setPosition( prev => prev + 1 )
		execRejection({variables:{id: "5e45fe19d97c7d3518255d79", userRejected}})

	}

	const postLike = () => {
		
		let userLiked = data.getPossibleMatchUsers[position]._id;
		if(position === data.getPossibleMatchUsers.length - 1) return;
		setPosition( prev => prev + 1 )
		execLike({variables:{id: "5e45fe19d97c7d3518255d79", userLiked}})

	}



	return (
		<Layout>

			<div className="cards-container">



				<Card name={data.getPossibleMatchUsers[position].name.first}
					age={data.getPossibleMatchUsers[position].age}
					id={data.getPossibleMatchUsers[position]._id}
					key={data.getPossibleMatchUsers[position]._id}
				/>



				<div className="actions">

					<div class="icon-container c-close" onClick={postRejection}>
						<IoMdClose />
					</div>
					<div class="icon-container c-heart" onClick={postLike}>
						<FaHeart />
					</div>

				</div>
			</div>


		</Layout>
	);
}

export default Home;
