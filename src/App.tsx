// 1_3_1 Convert some HTML to JSX
/* 
  Этот HTML был вставлен в компонент, но это не корректный JSX. Исправьте его.
*/

export default function Bio() {
  return (
    <div class="intro">
      <h1>Welcome to my website!</h1>
    </div>
    <p class="summary">
      You can find my thoughts here.
      <br><br>
      <b>And <i>pictures</b></i> of scientists!
    </p>
  );
}