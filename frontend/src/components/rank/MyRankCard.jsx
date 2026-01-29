const MyRankCard = () => {
  return (
    <div className="bg-gray-900 border border-orange-600/20 rounded-2xl p-4 py-2 flex justify-between items-center">
      <div>
        <p className="text-xs text-muted-foreground uppercase">My Rank</p>
        <p className="text-lg font-bold">Rohit</p>
        <p className="text-primary font-bold">#4176</p>
      </div>
      <div className="text-right">
        <p className="text-xl font-bold text-yellow-400">0.00</p>
        <p className="text-xs text-muted-foreground">USDT</p>
      </div>
    </div>
  );
};

export default MyRankCard;
