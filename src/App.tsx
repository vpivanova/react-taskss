// 1_2_1 Split the components further
/* 
  В настоящее время Gallery.tsx экспортирует и Profile и Gallery, что немного запутывает.

  Переместите компонент Profile в собственный Profile.tsx, а затем измените компонент App, чтобы он отображал и <Profile />, и <Gallery /> друг за другом.

  В ы можете использовать либо экспорт по умолчанию, либо именованный экспорт для Profile, но убедитесь, что вы используете соответствующий синтаксис импорта как в App.tsx, так и в Gallery.tsx!
*/

import Gallery from './Gallery.js';
import { Profile } from './Gallery.js';

export default function App() {
  return (
    <div>
      <Profile />
    </div>
  );
}
