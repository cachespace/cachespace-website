! function(a) {
    function b(a, b) {
        return a.toFixed(b.decimals)
    }
    a.fn.countTo = function(b) {
        return b = b || {}, a(this).each(function() {
            function k() {
                i += e, h++, l(i), "function" == typeof c.onUpdate && c.onUpdate.call(f, i), h >= d && (g.removeData("countTo"), clearInterval(j.interval), i = c.to, "function" == typeof c.onComplete && c.onComplete.call(f, i))
            }

            function l(a) {
                var b = c.formatter.call(f, a, c);
                g.text(b)
            }
            var c = a.extend({}, a.fn.countTo.defaults, {
                    from: a(this).data("from"),
                    to: a(this).data("to"),
                    speed: a(this).data("speed"),
                    refreshInterval: a(this).data("refresh-interval"),
                    decimals: a(this).data("decimals")
                }, b),
                d = Math.ceil(c.speed / c.refreshInterval),
                e = (c.to - c.from) / d,
                f = this,
                g = a(this),
                h = 0,
                i = c.from,
                j = g.data("countTo") || {};
            g.data("countTo", j), j.interval && clearInterval(j.interval), j.interval = setInterval(k, c.refreshInterval), l(i)
        })
    }, a.fn.countTo.defaults = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: b,
        onUpdate: null,
        onComplete: null
    }
}(jQuery);