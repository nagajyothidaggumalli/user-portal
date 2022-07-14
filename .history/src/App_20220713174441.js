import './App.css';
import EmployeeContainer from './components/EmployeeContainer';
import {BrowserRouter, Routes, Route , useLocation} from "react-router-dom";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div className="App">
        <EmployeeContainer/>
    </div>
  );
}

export default App;


//const studentData=[];

function App() {
    const [searchInput, setSearchInput] = useState("");
    const location = useLocation();

    useEffect(() => {
        setSearchInput("");
    }, [location.pathname]);

    return (
        <div className="container">
            <NavBar
                location={location}
                onSearch={setSearchInput}
                searchText={searchInput}
            />
            {/* <Switch> */}
                <Routes> 
                    {/* <Route path='/' element={<Redirect to="/students"/>}></Route> */}
                    <Route path='/' element={<StudentList data={studentData} searchInput={searchInput} />}></Route>
                    <Route path='/students' element={<StudentList data={studentData} searchInput={searchInput} />}></Route>
                    <Route path='/teachers' element={<TeachersList data={teacherData} searchInput={searchInput} />}></Route>
                </Routes>
            {/* </Switch> */}
        </div>
    );
}

function AppContainer() {
    return <BrowserRouter><App /></BrowserRouter>
}

export default AppContainer;

