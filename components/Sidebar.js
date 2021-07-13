import { Avatar } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import ChatIcon from '@material-ui/icons/Chat';
import styled from 'styled-components';

function Sidebar() {
  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>
      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search in chat"/>
      </Search>
      <SidebarButton>START A CHAT</SidebarButton>
    </Container>
  )
}

export default Sidebar;

const Container = styled.div`
  padding: 15px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  position: sticky;
  z-index: 1;
  background-color: white;
  border: 1px solid whitesmoke;
  top: 0;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div`

`;

const Search = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  flex: 1;
  width: 100%;
  border: none;
  outline-width: 0;
`;

const SidebarButton = styled(Button)`
  width: 100%;
  &&& {
    border-bottom: 1px solid whitesmoke;
    border-top: 1px solid whitesmoke;
  }
 
`;
