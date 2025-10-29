import { users } from "../../../dummyData";
import OnlineFriends from "../online/OnlineFriends";
import giftbox from "../../assets/posts/gift-box.png";
import uiux from "../../assets/posts/ui-ux.png";
import spider from "../../assets/person/spider.png";
import jerry from "../../assets/person/jerry.webp";
import mickeymouse from "../../assets/person/mickeymouse.jpeg";
import tom from "../../assets/person/tom.webp";
import pickachu from "../../assets/person/pickachu.png";
import chottabeam from "../../assets/person/chottabeam.jpeg";

const RightbarComponent = ({ Profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="flex items-center ">
          <img src={giftbox} alt="img" className="w-10 h-10 mr-2.5" />
          <span className="font-light text-[15px]">
            <b> Pola Foster </b> and <b>3 other friends </b> have a birthday
            toady
          </span>
        </div>
        <img
          src={uiux}
          alt="img"
          className="w-full rounded-[10px] my-[30px] mx-0"
        />
        <h4 className="font-medium mb-5 ">Online Friends</h4>
        <ul className="p-0 m-0 list-none">
          {users.map((user) => (
            <OnlineFriends key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="font-medium text-[18px] mb-2.5">User information</h4>
        <div className="mb-[30px]">
          <div className="mb-2.5">
            <span className="font-medium mr-[15px] text-gray-500  ">City:</span>
            <span className="font-light max-[792px]:text-[13px]">New York</span>
          </div>
          <div className="mb-2.5">
            <span className="font-medium mr-[15px] text-gray-500">From:</span>
            <span className="font-light max-[792px]:text-[13px]">Madrid</span>
          </div>
          <div className="mb-2.5">
            <span className="font-medium mr-[15px] text-gray-500">
              Relationship:
            </span>
            <span className="font-light max-[792px]:text-[13px]">Single</span>
          </div>
        </div>
        <h4 className="font-medium text-[18px] mb-2.5">User friends</h4>
        <div className="flex flex-wrap justify-between gap-2.5 max-[788px]:justify-center">
          <div className="flex flex-col mb-5 cursor-pointer">
            <img
              src={spider}
              alt="img"
              className="w-[100px] h-[100px] object-cover rounded-[5px]"
            />
            <span className="rightbarname max-[792px]:text-[13px]">
              spiderman
            </span>
          </div>
          <div className="flex flex-col mb-5 cursor-pointer">
            <img
              src={chottabeam}
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-[5px]"
            />
            <span className="rightbarname max-[792px]:text-[13px] max-[792px]:text-[13px]">
              chottabeam
            </span>
          </div>
          <div className="flex flex-col mb-5 cursor-pointer">
            <img
              src={jerry}
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-[5px]"
            />
            <span className="rightbarname max-[792px]:text-[13px]">jerry</span>
          </div>
          <div className="flex flex-col mb-5 cursor-pointer">
            <img
              src={mickeymouse}
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-[5px]"
            />
            <span className="rightbarname max-[792px]:text-[13px]">
              mickeymouse
            </span>
          </div>
          <div className="flex flex-col mb-5 cursor-pointer">
            <img
              src={tom}
              alt="img"
              className="w-[100px] h-[100px] object-cover rounded-[5px]"
            />
            <span className="rightbarname max-[792px]:text-[13px]">tom</span>
          </div>
          <div className="flex flex-col mb-5 cursor-pointer">
            <img
              src={pickachu.png}
              alt="img"
              className="w-[100px] h-[100px] object-cover rounded-[5px]"
            />
            <span className="rightbarname max-[792px]:text-[13px]">
              pickachu
            </span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="flex-[3.5] max-[483px]:hidden">
      <div className="pt-5 pr-5 pb-0 pl-0">
        {Profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default RightbarComponent;
