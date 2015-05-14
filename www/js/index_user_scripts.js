(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Button */
    
    
        /* button  Button */
    $(document).on("click", ".uib_w_4", function(evt)
    {
        /* your code goes here */ 
    });
    
        /* listitem  #beverages */
    
    
        /* button  Home */
    
    
        /* button  .uib_w_5 */
    
    
        /* button  .uib_w_5 */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         activate_subpage("#page_38_22"); 
    });
    
        /* button  #topleft */
    $(document).on("click", "#topleft", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_16"));  
    });
    
        /* button  #back */
    $(document).on("click", "#back", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
        //uib_sb.toggle_sidebar($(".uib_w_16"));  
        uib_sb.close_sidebar($(".uib_w_16"));
    });
    
        /* listitem  #beverages */
    
    
        /* listitem  #beverages */
    $(document).on("click", "#beverages", function(evt)
    {
         activate_subpage("#Beverages").transition("blur"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
