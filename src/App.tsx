import { OnlineContent } from './pages/OnlineContent';
import { ContentDistribution } from './pages/ContentDistribution';
import { HelpDocumentation } from './pages/HelpDocumentation';
import { UserData } from './pages/UserData';
import { ContentData } from './pages/ContentData';
import './App.css';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.dashboard}>
        {/* 左侧三个卡片 */}
        <div className={styles.leftColumn}>
          <OnlineContent />
          <ContentDistribution />
          <HelpDocumentation />
        </div>
        {/* 右侧两个图表 */}
        <div className={styles.rightColumn}>
          <UserData />
          <ContentData />
        </div>
      </div>
    </div>
  );
}

export default App;
