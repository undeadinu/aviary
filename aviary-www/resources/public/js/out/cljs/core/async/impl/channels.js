// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.channels.box = (function box(val){
if(typeof cljs.core.async.impl.channels.t43759 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.channels.t43759 = (function (val,box,meta43760){
this.val = val;
this.box = box;
this.meta43760 = meta43760;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t43759.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t43759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43761){
var self__ = this;
var _43761__$1 = this;
return self__.meta43760;
});

cljs.core.async.impl.channels.t43759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43761,meta43760__$1){
var self__ = this;
var _43761__$1 = this;
return (new cljs.core.async.impl.channels.t43759(self__.val,self__.box,meta43760__$1));
});

cljs.core.async.impl.channels.t43759.cljs$lang$type = true;

cljs.core.async.impl.channels.t43759.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t43759";

cljs.core.async.impl.channels.t43759.cljs$lang$ctorPrWriter = (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async.impl.channels/t43759");
});

cljs.core.async.impl.channels.__GT_t43759 = (function __GT_t43759(val__$1,box__$1,meta43760){
return (new cljs.core.async.impl.channels.t43759(val__$1,box__$1,meta43760));
});

}

return (new cljs.core.async.impl.channels.t43759(val,box,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function __GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

cljs.core.async.impl.channels.MMC = (function (){var obj43763 = {};
return obj43763;
})();

cljs.core.async.impl.channels.abort = (function abort(this$){
if((function (){var and__23665__auto__ = this$;
if(and__23665__auto__){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1;
} else {
return and__23665__auto__;
}
})()){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__24321__auto__ = (((this$ == null))?null:this$);
return (function (){var or__23677__auto__ = (cljs.core.async.impl.channels.abort[(function (){var G__43767 = x__24321__auto__;
return goog.typeOf(G__43767);
})()]);
if(or__23677__auto__){
return or__23677__auto__;
} else {
var or__23677__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(or__23677__auto____$1){
return or__23677__auto____$1;
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__23665__auto__ = self__.buf;
if(cljs.core.truth_(and__23665__auto__)){
return (self__.puts.length === (0));
} else {
return and__23665__auto__;
}
})())){
var G__43768_43780 = self__.buf;
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(G__43768_43780) : self__.add_BANG_.call(null,G__43768_43780));
} else {
}

while(true){
var taker_43781 = self__.takes.pop();
if((taker_43781 == null)){
} else {
if(taker_43781.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_43782 = taker_43781.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_43783 = (cljs.core.truth_((function (){var and__23665__auto__ = self__.buf;
if(cljs.core.truth_(and__23665__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__23665__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_43782,val_43783,taker_43781,this$__$1){
return (function (){
var G__43769 = val_43783;
return (take_cb_43782.cljs$core$IFn$_invoke$arity$1 ? take_cb_43782.cljs$core$IFn$_invoke$arity$1(G__43769) : take_cb_43782.call(null,G__43769));
});})(take_cb_43782,val_43783,taker_43781,this$__$1))
);
} else {
}

continue;
}
break;
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count(self__.buf) > (0)))){
var _ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var retval = cljs.core.async.impl.channels.box(self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null));
while(true){
if(cljs.core.truth_(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))){
} else {
var putter_43784 = self__.puts.pop();
if((putter_43784 == null)){
} else {
var put_handler_43785 = putter_43784.handler;
var val_43786 = putter_43784.val;
if(put_handler_43785.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_43787 = put_handler_43785.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb_43787,put_handler_43785,val_43786,putter_43784,_,retval,this$__$1){
return (function (){
var G__43770 = true;
return (put_cb_43787.cljs$core$IFn$_invoke$arity$1 ? put_cb_43787.cljs$core$IFn$_invoke$arity$1(G__43770) : put_cb_43787.call(null,G__43770));
});})(put_cb_43787,put_handler_43785,val_43786,putter_43784,_,retval,this$__$1))
);

if(cljs.core.reduced_QMARK_((function (){var G__43771 = self__.buf;
var G__43772 = val_43786;
return (self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(G__43771,G__43772) : self__.add_BANG_.call(null,G__43771,G__43772));
})())){
cljs.core.async.impl.channels.abort(this$__$1);
} else {
}
} else {
}

continue;
}
}
break;
}

return retval;
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb,putter,this$__$1){
return (function (){
var G__43773 = true;
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(G__43773) : put_cb.call(null,G__43773));
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
var G__43774_43788 = self__.buf;
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(G__43774_43788) : self__.add_BANG_.call(null,G__43774_43788));
} else {
}

if(cljs.core.truth_((function (){var and__23665__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__23665__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__23665__auto__;
}
})())){
var has_val = (function (){var and__23665__auto__ = self__.buf;
if(cljs.core.truth_(and__23665__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__23665__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending takes are allowed on a single channel.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"takes","takes",298247964,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null))], 0)))].join('')));
}

self__.takes.unbounded_unshift(handler);

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't put nil in on a channel"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null)))], 0)))].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return cljs.core.async.impl.channels.box(!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__23665__auto__ = self__.buf;
if(cljs.core.truth_(and__23665__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__23665__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((function (){var G__43775 = self__.buf;
var G__43776 = val;
return (self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(G__43775,G__43776) : self__.add_BANG_.call(null,G__43775,G__43776));
})());
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0)))){
var taker_43789 = self__.takes.pop();
if(taker_43789.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_43790 = taker_43789.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_43791__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (take_cb_43790,val_43791__$1,taker_43789,done_QMARK_,closed__$1,this$__$1){
return (function (){
var G__43777 = val_43791__$1;
return (take_cb_43790.cljs$core$IFn$_invoke$arity$1 ? take_cb_43790.cljs$core$IFn$_invoke$arity$1(G__43777) : take_cb_43790.call(null,G__43777));
});})(take_cb_43790,val_43791__$1,taker_43789,done_QMARK_,closed__$1,this$__$1))
);
} else {
continue;
}
} else {
}
break;
}

if(done_QMARK_){
cljs.core.async.impl.channels.abort(this$__$1);
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit(taker);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
var G__43778 = val;
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(G__43778) : take_cb.call(null,G__43778));
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending puts are allowed on a single channel."),cljs.core.str(" Consider using a windowed buffer.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"puts","puts",-1883877054,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null))], 0)))].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_43792 = self__.puts.pop();
if((putter_43792 == null)){
} else {
var put_handler_43793 = putter_43792.handler;
var val_43794 = putter_43792.val;
if(put_handler_43793.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_43795 = put_handler_43793.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_43795,put_handler_43793,val_43794,putter_43792,this$__$1){
return (function (){
var G__43779 = true;
return (put_cb_43795.cljs$core$IFn$_invoke$arity$1 ? put_cb_43795.cljs$core$IFn$_invoke$arity$1(G__43779) : put_cb_43795.call(null,G__43779));
});})(put_cb_43795,put_handler_43793,val_43794,putter_43792,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return cljs.core.async.impl.protocols.close_BANG_(this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__24264__auto__,writer__24265__auto__,opt__24266__auto__){
return cljs.core._write(writer__24265__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function __GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function handle(buf,exh,t){
var else$ = (function (){var or__23677__auto__ = exh;
if(cljs.core.truth_(or__23677__auto__)){
return or__23677__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function() {
var chan = null;
var chan__1 = (function (buf){
return chan.cljs$core$IFn$_invoke$arity$2(buf,null);
});
var chan__2 = (function (buf,xform){
return chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
});
var chan__3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(function (){var G__43807 = cljs.core.async.impl.protocols.add_BANG_;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__43807) : xform.call(null,G__43807));
})():cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__43813 = null;
var G__43813__1 = (function (buf__$1){
try{var G__43809 = buf__$1;
return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(G__43809) : add_BANG_.call(null,G__43809));
}catch (e43808){var t = e43808;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__43813__2 = (function (buf__$1,val){
try{var G__43811 = buf__$1;
var G__43812 = val;
return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(G__43811,G__43812) : add_BANG_.call(null,G__43811,G__43812));
}catch (e43810){var t = e43810;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__43813 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__43813__1.call(this,buf__$1);
case 2:
return G__43813__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43813.cljs$core$IFn$_invoke$arity$1 = G__43813__1;
G__43813.cljs$core$IFn$_invoke$arity$2 = G__43813__2;
return G__43813;
})()
;})(add_BANG_))
})()));
});
chan = function(buf,xform,exh){
switch(arguments.length){
case 1:
return chan__1.call(this,buf);
case 2:
return chan__2.call(this,buf,xform);
case 3:
return chan__3.call(this,buf,xform,exh);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
