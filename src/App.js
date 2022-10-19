import Button from "./component/button";

function App() {
  return (
    <>
      <h1>Buttons</h1>

      <div className="group">
        <div className="left">
          <code>{"<Button />"}</code>

          <Button />
        </div>

        <div className="right">
          <code>{"&:hover, &:focus"}</code>

          <Button autoFocus />
        </div>
      </div>

      <div className="group">
        <div className="left">
          <code>{'<Button variant="outline" />'}</code>

          <Button variant="outline" disableShadow />
        </div>

        <div className="right">
          <code>{"&:hover, &:focus"}</code>

          <Button variant="outline" autoFocus disableShadow />
        </div>
      </div>

      <div className="group">
        <div className="left">
          <code>{'<Button variant="text" />'}</code>

          <Button variant="text" disableShadow />
        </div>

        <div className="right">
          <code>{"&:hover, &:focus"}</code>

          <Button variant="text" autoFocus disableShadow />
        </div>
      </div>

      <div className="group">
        <div className="left">
          <code>{"<Button disableShadow />"}</code>

          <Button disableShadow color="primary" />
        </div>
      </div>

      <div className="group">
        <div className="left">
          <code>{"<Button disabled />"}</code>

          <Button disabled />
        </div>

        <div className="right">
          <code>{'<Button variant="text" disabled />'}</code>

          <Button variant="text" disabled />
        </div>
      </div>

      <div className="group">
        <div className="left">
          <code>{'<Button startIcon="local_grocery_store" />'}</code>

          <Button startIcon="local_grocery_store" color="primary" />
        </div>

        <div className="right">
          <code>{'<Button endIcon="local_grocery_store" />'}</code>

          <Button endIcon="local_grocery_store" color="primary" />
        </div>
      </div>

      <div className="group">
        <div className="left">
          <code>{'<Button size="sm" />'}</code>

          <Button size="sm" color="primary" />
        </div>

        <div className="middle">
          <code>{'<Button size="md" />'}</code>

          <Button size="md" color="primary" />
        </div>

        <div className="right">
          <code>{'<Button size="lg" />'}</code>

          <Button size="lg" color="primary" />
        </div>
      </div>

      <div className="group">
        <div className="left">
          <code>{'<Button color="default" />'}</code>

          <Button color="default" />
        </div>

        <div className="middle-left">
          <code>{'<Button color="primary" />'}</code>

          <Button color="primary" />
        </div>

        <div className="middle-right">
          <code>{'<Button color="secondary" />'}</code>

          <Button color="secondary" />
        </div>

        <div className="right">
          <code>{'<Button color="danger" />'}</code>

          <Button color="danger" />
        </div>
      </div>

      <div className="group">
        <div className="left">
          <code>{'<Button color="default" />'}</code>

          <Button color="default" autoFocus />
        </div>

        <div className="middle-left">
          <code>{'<Button color="primary" />'}</code>

          <Button color="primary" autoFocus />
        </div>

        <div className="middle-right">
          <code>{'<Button color="secondary" />'}</code>

          <Button color="secondary" autoFocus />
        </div>

        <div className="right">
          <code>{'<Button color="danger" />'}</code>

          <Button color="danger" autoFocus />
        </div>
      </div>
    </>
  );
}

export default App;
