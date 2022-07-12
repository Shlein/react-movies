import './App.css';
import PostsList from "./components/PostsList/PostsList";
import {useEffect, useRef, useState} from "react";
import PostService from "./services/PostService";
import axios from "axios";
import MyModal from "./UI/MyModal/MyModal";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import MySelect from "./UI/mySelect/MySelect";

function App() {

  const [posts, setPosts] =  useState([
    // {id: 1, title: 'JS', body: 'Nice'},
    // {id: 2, title: 'Python', body: 'Norm'},
    // {id: 3, title: 'Java', body: 'Kal'},
  ])
  const [isModalVisible, setModalVisible] = useState(false);
  const [post, setPost] = useState({title: '', body: ''});
  const [searchString, setSearchString] = useState('');
  const [searchedPosts, setSearchedPosts] = useState([]);
  const [selectedSort, setSelectedSort] = useState('id');
  const [sortedAndSelectedPosts, setSortedAndSelectedPosts] = useState([])

  const modalInputRef = useRef(null);

  function searchPosts(posts) {
    setSearchedPosts([...posts].filter(
      (post) => post.title.toLowerCase().includes(searchString.toLowerCase())
    ));
  }

  function sortAndSelectPosts() {
    setSortedAndSelectedPosts([...posts].sort())
  }

  useEffect(() => {
    searchPosts(posts)
  }, [searchedPosts])

  useEffect(() => {
    getPosts();
  }, [])

  async function getPosts() {
    const posts = await PostService.getAllPosts();
    setPosts(posts);
  }

  function handleModalButton() {
    setModalVisible(true);
    modalInputRef.current.focus();
  }

  const addPost = (e) => {
    e.preventDefault();
    const newPost = {
      'id': Date.now(),
      'title': post.title,
      'body': post.body,
    };
    setPosts([...posts, newPost]);
    setPost({title: '', body: ''});
    setModalVisible(false);
  }

  const removePost = (postId) => {
    setPosts([...posts].filter((post) => post.id !== postId))
  }

  return (
    <div id='root'>
      <MyModal
        isVisible={isModalVisible}
        setVisible={setModalVisible}
      >
        <h3>Создать пост</h3>
        <form>
          <MyInput
            placeholder='Введите название поста'
            onChange={(e) => setPost({title: e.target.value, body: post.body})}
            value={post.title}
            ref={modalInputRef}
          />
          <MyInput
            placeholder='Введите описание поста'
            onChange={(e) => setPost({title: post.title, body: e.target.value})}
            value={post.body}
          />
          <MyButton
            onClick={addPost}
          >
            Создать пост
          </MyButton>
        </form>
      </MyModal>
      <MyButton
        onClick={handleModalButton}
        // onInstantFocus={modalInputRef.current.focus}
      >
        Добавить пост
      </MyButton>

      <MyInput
        placeholder='Поиск по постам...'
        value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
      />

      <MySelect
        options = {
          [
            {value: 'id', text: 'Сортировка по id'},
            {value: 'title', text: 'Сортировка по названию'},
            {value: 'body', text: 'Сортировка по описанию'},
          ]
        }
        onChange={(e) => {
          setSelectedSort(e.target.value)
        }}
      />

      <PostsList
        posts={searchedPosts}
        removePost={removePost}
      />
    </div>
  )
}

export default App;
