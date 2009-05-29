// default menu align for button menu
Ext.override(Ext.Button, { menuAlign:'tr-br?', iconAlign: 'right' });

// isClickOnArrow for SplitButton shpuld check for smaller than left
Ext.override(Ext.SplitButton, {
    isClickOnArrow : function(e){
        return this.arrowAlign != 'bottom' ?
               e.getPageX() < this.el.child(this.buttonSelector).getRegion().left :
               e.getPageY() > this.el.child(this.buttonSelector).getRegion().bottom;
    },
});

// Ext.layout.HBoxLayout needs total new onLayout
Ext.override(Ext.layout.HBoxLayout,{
    onLayout : function(ct, target){
        Ext.layout.HBoxLayout.superclass.onLayout.call(this, ct, target);

        var cs = ct.items.items, len = cs.length, c, i, last = len-1, cm;
        var size = this.getTargetSize(target);

        var w = size.width - target.getPadding('lr') - this.scrollOffset,
            h = size.height - target.getPadding('tb'),
            l = this.padding.left, t = this.padding.top;

        if ((Ext.isIE && !Ext.isStrict) && (w < 1 || h < 1)) {
            return;
        } else if (w < 1 && h < 1) {
            return;
        }

        var stretchHeight = h - (this.padding.top + this.padding.bottom);

        var totalFlex = 0;
        var totalWidth = 0;

        var maxHeight = 0;

        for(i = 0; i < len; i++){
            c = cs[i];
            cm = c.margins;
            totalFlex += c.flex || 0;
            totalWidth += c.getWidth() + cm.left + cm.right;
            maxHeight = Math.max(maxHeight, c.getHeight() + cm.top + cm.bottom);
        }

        var innerCtHeight = maxHeight + this.padding.top + this.padding.bottom;

        switch(this.align){
            case 'stretch':
                this.innerCt.setSize(w, h);
                break;
            case 'stretchmax':
            case 'top':
                this.innerCt.setSize(w, innerCtHeight);
                break;
            case 'middle':
                this.innerCt.setSize(w, h = Math.max(h, innerCtHeight));
                break;

        }

        var extraWidth = w - totalWidth - this.padding.left - this.padding.right;
        var allocated = 0;

        var cw, ch, ct, availableHeight = h - this.padding.top - this.padding.bottom;

        if(this.pack == 'center'){
            l += extraWidth ? extraWidth/2 : 0;
        }else if(this.pack == 'end'){
            l += extraWidth;
        }
        for(i = 0; i < len; i++){
            c = cs[i];
            cm = c.margins;
            cw = c.getWidth();
            ch = c.getHeight();

            l += cm.right;
            if(this.align != 'middle'){
                ct = t + cm.top;
            }else{
                var diff = availableHeight - (ch + cm.top + cm.bottom);
                if(diff == 0){
                    ct = t + cm.top;
                }else{
                    ct = t + cm.top + (diff/2);
                }
            }

            if(this.pack == 'start' && c.flex){
                var ratio = c.flex/totalFlex;
                var add = Math.floor(extraWidth*ratio);
                allocated += add;
                if(i == last){
                    add += (extraWidth-allocated);
                }
                cw += add;
                c.setWidth(cw);
            }
            c.setPosition(w - l - cw, ct);
            if(this.align == 'stretch'){
                c.setHeight((stretchHeight - (cm.top + cm.bottom)).constrain(c.minHeight || 0, c.maxHeight || 1000000));
            }else if(this.align == 'stretchmax'){
                c.setHeight((maxHeight - (cm.top + cm.bottom)).constrain(c.minHeight || 0, c.maxHeight || 1000000));
            }
            l += cw + cm.left;
        }
    }

});