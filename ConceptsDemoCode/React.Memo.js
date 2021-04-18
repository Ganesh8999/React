export function Film({ name, actor }) {
  return (
    <div>
      <div>Film Name {name}</div>
      <div>Actor Name {actor}</div>
    </div>
  );
}

export const MemoizedFilm = React.memo(Film);

// for more checks and should return true but most of the time won't required
export const MemoizedFilm = React.memo(Film, [areEqual(prevProps, nextProps)]);
function filmAndActorAreEqual(prevProps, nextProps) {
  return (
    prevProps.name === nextProps.name && prevProps.actor === nextProps.actor
  );
}

const MemoizedMovie2 = React.memo(Movie, moviePropsAreEqual);

// first render
<MemoizedFilm name="Super 30" actor="Hritik" />;

// 2nd render
// next time React won't call MemoizedFilm function,
// avoiding render operation
{
  /* <MemoizedFilm
name= "Super 30"
actor="Hritik"
/> */
}
