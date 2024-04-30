import React from "react";

const TabType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY",
};

const TabLabel = {
  [TabType.KEYWORD]: "추천 검색어",
  [TabType.HISTORY]: "최근 검색어",
};

export default function Tabs({ selectedTab, onClick }) {
  return (
    <>
      <ui className="tabs">
        {Object.values(TabType).map((tabType) => {
          return (
            <li
              className={selectedTab === tabType ? "active" : ""}
              onClick={() => onClick(tabType)}
              key={tabType}
            >
              {TabLabel[tabType]}
            </li>
          );
        })}
      </ui>
    </>
  );
}
