//#region Global Imports
import * as React from 'react';
//#endregion Global Imports

//#region Local Imports
import './style.scss';
//#endregion Local Imports

//#region Interface Imports
import { IMenu } from '@Interfaces';
import Link from 'next/link';
//#endregion Interface Imports

export class Menu extends React.Component<IMenu.IProps, IMenu.IState> {
	public render(): JSX.Element {
    const { title } = this.props
		return (
      <div className="menu">
        <div className="menu-title">
          {title}
        </div>
        <div className="menu-links">
          <Link href='/'>
            <a>The Game</a>
          </Link>
          <Link href='/probabilities'>
            <a>Probabilities & Stats</a>
          </Link>
        </div>
      </div>
		);
	}
}
