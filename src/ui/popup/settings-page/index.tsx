import {m} from 'malevic';
import {ViewProps} from '../types';
import AutomationButton from './automation-button';
import DevToolsGroup from './devtools';
import ManageSettingsButton from './mange-settings-button';
import SiteListButton from './site-list-button';
import EnabledByDefaultGroup from './enabled-by-default';
import {isFirefox} from '../../../utils/platform';
import EnableCustomBrowserTheme from './enable-browser-theme';


type SettingsPageProps = ViewProps & {
    onAutomationNavClick: () => void;
    onManageSettingsClick: () => void;
    onSiteListNavClick: () => void;
};

export default function SettingsPage(props: SettingsPageProps) {
    return (
        <section class="m-section">
            <EnabledByDefaultGroup {...props} />
            {isFirefox() ? <EnableCustomBrowserTheme {...props}/> : null}
            <SiteListButton onClick={props.onSiteListNavClick} />
            <DevToolsGroup {...props} />
            <AutomationButton onClick={props.onAutomationNavClick} />
            <ManageSettingsButton onClick={props.onManageSettingsClick} />
        </section>
    );
}
