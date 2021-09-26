import React from 'react';
import Link from 'next/link';
import style from './breadcrumbs.module.scss';

export default function Breadcrumbs({ breadcrumbs, currPath }) {
  return (
    <>
      <div className={style.breadcrumbs}>
        <ul className={style.list}>
          {breadcrumbs && breadcrumbs.map((item)=>    
            <li className={style.item} key={item.id}>   
              <Link href={item.link}>
                <a><span className={style.link}>{item.title}</span></a>
              </Link>
            </li>
          )}
          {currPath &&
            <li className={style.item}>
              <span className={style.link}>{currPath }</span>
            </li>
          }
        </ul>
      </div>
    </>
  );
};
