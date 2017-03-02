!function(t,a){var e={},o=function(){var t=window.location.search.match(/department=(.*)/),e=null!==t&&t[0].indexOf("department=")!==-1,o=e&&""!==t[1]?t[1]:"Development";return a.get("https://time-is-a-flat-circle.herokuapp.com/api/week?department="+o)},l=function(t){return console.log(t),a("[data-clocks]").html(""),t.entries.forEach(function(t){var e=a("<div />",{"class":"name",text:t.name}),o=a("<div />",{"class":"clock total-clock","data-clock":"total"}),l=a("<div />",{"class":"clock billable-clock","data-clock":"billable"}),c=a("<div />",{"class":"clock-wrapper"}).append(o).append(l),n=a("<div />",{"class":"entry","data-clocks-for":t.name}).append(e).append(c);a("[data-clocks]").append(n)}),t},c=function(t){t.entries.forEach(function(t){var o=a('[data-clocks-for="'+t.name+'"] [data-clock="total"]').FlipClock({autoStart:t.isActive}),l=a('[data-clocks-for="'+t.name+'"] [data-clock="billable"]').FlipClock({autoStart:t.isActive&&t.isBillable});o.setTime(3600*t.hours.total),l.setTime(3600*t.hours.billable),e[t.name]={total:o,billable:l}})},n=function(t){t.entries.forEach(function(t){var a=e[t.name].total,o=e[t.name].billable;a.setTime(3600*t.hours.total),o.setTime(3600*t.hours.billable),a.stop(),o.stop(),t.isActive&&(a.start(),t.isBillable&&o.start())})},i=function(){o().then(l).done(c)},r=function(){o().done(n)};t.init=function(){i(),setInterval(function(){r()},6e4)}}(window.Clock=window.Clock||{},jQuery),function(t,a){var e=function(){var t=a("h1"),e=t.text(),o="Billable Time."===e?"Total Time":"Billable Time";t.html(o+'<a href="#">.</a>'),a("[data-clocks]").attr("data-active-clocks",o)},o=function(){a(document).on("click","h1 a",function(t){t.preventDefault(),e()})};t.init=function(){o()}}(window.Scoreboard=window.Scoreboard||{},jQuery),function(){Scoreboard.init(),Clock.init()}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsb2NrLmpzIiwiU2NvcmVib2FyZC5qcyIsImluaXQuanMiXSwibmFtZXMiOlsiQ2xvY2siLCIkIiwiQ2xvY2tzIiwiZ2V0UGVvcGxlc1RpbWVFbnRyaWVzIiwicXVlcnlTdHJpbmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsIm1hdGNoIiwicXVlcnlTdHJpbmdIYXNEZXBhcnRtZW50IiwiaW5kZXhPZiIsImRlcGFydG1lbnQiLCJnZXQiLCJjb25zdHJ1Y3RSb3dzIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiaHRtbCIsImVudHJpZXMiLCJmb3JFYWNoIiwicGVyc29uIiwiJG5hbWUiLCJjbGFzcyIsInRleHQiLCJuYW1lIiwiJHRvdGFsQ2xvY2siLCJkYXRhLWNsb2NrIiwiJGJpbGxhYmxlQ2xvY2siLCIkY2xvY2tXcmFwcGVyIiwiYXBwZW5kIiwiJGVudHJ5IiwiZGF0YS1jbG9ja3MtZm9yIiwiaW5pdENsb2NrcyIsInRvdGFsQ2xvY2siLCJGbGlwQ2xvY2siLCJhdXRvU3RhcnQiLCJpc0FjdGl2ZSIsImJpbGxhYmxlQ2xvY2siLCJpc0JpbGxhYmxlIiwic2V0VGltZSIsImhvdXJzIiwidG90YWwiLCJiaWxsYWJsZSIsInVwZGF0ZUNsb2NrcyIsInN0b3AiLCJzdGFydCIsImluaXRWaWV3IiwidGhlbiIsImRvbmUiLCJ1cGRhdGVWaWV3IiwiaW5pdCIsInNldEludGVydmFsIiwialF1ZXJ5IiwiU2NvcmVib2FyZCIsInRvZ2dsZUhlYWRpbmdBbmRDbG9ja3MiLCIkaGVhZGluZyIsImN1cnJlbnRUZXh0IiwidXBkYXRlZFRleHQiLCJhdHRyIiwiYmluZFVJQWN0aW9ucyIsImRvY3VtZW50Iiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiQ0FBQSxTQUFBQSxFQUFBQyxHQUVBLEdBQUFDLE1BRUFDLEVBQUEsV0FDQSxHQUFBQyxHQUFBQyxPQUFBQyxTQUFBQyxPQUFBQyxNQUFBLG1CQUNBQyxFQUFBLE9BQUFMLEdBQUFBLEVBQUEsR0FBQU0sUUFBQSxvQkFDQUMsRUFBQUYsR0FBQSxLQUFBTCxFQUFBLEdBQUFBLEVBQUEsR0FBQSxhQUNBLE9BQUFILEdBQUFXLElBQUEsbUVBQUFELElBR0FFLEVBQUEsU0FBQUMsR0FXQSxNQVZBQyxTQUFBQyxJQUFBRixHQUNBYixFQUFBLGlCQUFBZ0IsS0FBQSxJQUNBSCxFQUFBSSxRQUFBQyxRQUFBLFNBQUFDLEdBQ0EsR0FBQUMsR0FBQXBCLEVBQUEsV0FBQXFCLFFBQUEsT0FBQUMsS0FBQUgsRUFBQUksT0FDQUMsRUFBQXhCLEVBQUEsV0FBQXFCLFFBQUEsb0JBQUFJLGFBQUEsVUFDQUMsRUFBQTFCLEVBQUEsV0FBQXFCLFFBQUEsdUJBQUFJLGFBQUEsYUFDQUUsRUFBQTNCLEVBQUEsV0FBQXFCLFFBQUEsa0JBQUFPLE9BQUFKLEdBQUFJLE9BQUFGLEdBQ0FHLEVBQUE3QixFQUFBLFdBQUFxQixRQUFBLFFBQUFTLGtCQUFBWCxFQUFBSSxPQUFBSyxPQUFBUixHQUFBUSxPQUFBRCxFQUNBM0IsR0FBQSxpQkFBQTRCLE9BQUFDLEtBRUFoQixHQUdBa0IsRUFBQSxTQUFBbEIsR0FDQUEsRUFBQUksUUFBQUMsUUFBQSxTQUFBQyxHQUNBLEdBQUFhLEdBQUFoQyxFQUFBLHFCQUFBbUIsRUFBQUksS0FBQSwyQkFBQVUsV0FDQUMsVUFBQWYsRUFBQWdCLFdBRUFDLEVBQUFwQyxFQUFBLHFCQUFBbUIsRUFBQUksS0FBQSw4QkFBQVUsV0FDQUMsVUFBQWYsRUFBQWdCLFVBQUFoQixFQUFBa0IsWUFFQUwsR0FBQU0sUUFBQSxLQUFBbkIsRUFBQW9CLE1BQUFDLE9BQ0FKLEVBQUFFLFFBQUEsS0FBQW5CLEVBQUFvQixNQUFBRSxVQUNBeEMsRUFBQWtCLEVBQUFJLE9BQ0FpQixNQUFBUixFQUNBUyxTQUFBTCxNQUtBTSxFQUFBLFNBQUE3QixHQUNBQSxFQUFBSSxRQUFBQyxRQUFBLFNBQUFDLEdBQ0EsR0FBQWEsR0FBQS9CLEVBQUFrQixFQUFBSSxNQUFBaUIsTUFDQUosRUFBQW5DLEVBQUFrQixFQUFBSSxNQUFBa0IsUUFFQVQsR0FBQU0sUUFBQSxLQUFBbkIsRUFBQW9CLE1BQUFDLE9BQ0FKLEVBQUFFLFFBQUEsS0FBQW5CLEVBQUFvQixNQUFBRSxVQUVBVCxFQUFBVyxPQUNBUCxFQUFBTyxPQUNBeEIsRUFBQWdCLFdBQ0FILEVBQUFZLFFBQ0F6QixFQUFBa0IsWUFDQUQsRUFBQVEsWUFNQUMsRUFBQSxXQUNBM0MsSUFDQTRDLEtBQUFsQyxHQUNBbUMsS0FBQWhCLElBR0FpQixFQUFBLFdBQ0E5QyxJQUNBNkMsS0FBQUwsR0FHQTNDLEdBQUFrRCxLQUFBLFdBQ0FKLElBQ0FLLFlBQUEsV0FDQUYsS0FDQSxPQUdBNUMsT0FBQUwsTUFBQUssT0FBQUwsVUFBQW9ELFFDL0VBLFNBQUFDLEVBQUFwRCxHQUVBLEdBQUFxRCxHQUFBLFdBQ0EsR0FBQUMsR0FBQXRELEVBQUEsTUFDQXVELEVBQUFELEVBQUFoQyxPQUNBa0MsRUFBQSxtQkFBQUQsRUFBQSxhQUFBLGVBQ0FELEdBQUF0QyxLQUFBd0MsRUFBQSxxQkFDQXhELEVBQUEsaUJBQUF5RCxLQUFBLHFCQUFBRCxJQUdBRSxFQUFBLFdBQ0ExRCxFQUFBMkQsVUFBQUMsR0FBQSxRQUFBLE9BQUEsU0FBQUMsR0FDQUEsRUFBQUMsaUJBQ0FULE1BSUFELEdBQUFILEtBQUEsV0FDQVMsTUFHQXRELE9BQUFnRCxXQUFBaEQsT0FBQWdELGVBQUFELFFDckJBLFdBRUFDLFdBQUFILE9BQ0FsRCxNQUFBa0QiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoQ2xvY2ssICQpIHtcblxuICB2YXIgQ2xvY2tzID0ge307XG5cbiAgdmFyIGdldFBlb3BsZXNUaW1lRW50cmllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLm1hdGNoKC9kZXBhcnRtZW50PSguKikvKTtcbiAgICB2YXIgcXVlcnlTdHJpbmdIYXNEZXBhcnRtZW50ID0gKHF1ZXJ5U3RyaW5nICE9PSBudWxsKSAmJiAocXVlcnlTdHJpbmdbMF0uaW5kZXhPZignZGVwYXJ0bWVudD0nKSAhPT0gLTEpO1xuICAgIHZhciBkZXBhcnRtZW50ID0gKHF1ZXJ5U3RyaW5nSGFzRGVwYXJ0bWVudCAmJiBxdWVyeVN0cmluZ1sxXSAhPT0gJycpID8gcXVlcnlTdHJpbmdbMV0gOiAnRGV2ZWxvcG1lbnQnO1xuICAgIHJldHVybiAkLmdldCgnaHR0cHM6Ly90aW1lLWlzLWEtZmxhdC1jaXJjbGUuaGVyb2t1YXBwLmNvbS9hcGkvd2Vlaz9kZXBhcnRtZW50PScgKyBkZXBhcnRtZW50KTtcbiAgfTtcblxuICB2YXIgY29uc3RydWN0Um93cyA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAkKCdbZGF0YS1jbG9ja3NdJykuaHRtbCgnJyk7XG4gICAgcmVzcG9uc2UuZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uIChwZXJzb24pIHtcbiAgICAgIHZhciAkbmFtZSA9ICQoJzxkaXYgLz4nLCB7J2NsYXNzJzogJ25hbWUnLCB0ZXh0OiBwZXJzb24ubmFtZX0pO1xuICAgICAgdmFyICR0b3RhbENsb2NrID0gJCgnPGRpdiAvPicsIHsnY2xhc3MnOiAnY2xvY2sgdG90YWwtY2xvY2snLCAnZGF0YS1jbG9jayc6ICd0b3RhbCd9KTtcbiAgICAgIHZhciAkYmlsbGFibGVDbG9jayA9ICQoJzxkaXYgLz4nLCB7J2NsYXNzJzogJ2Nsb2NrIGJpbGxhYmxlLWNsb2NrJywgJ2RhdGEtY2xvY2snOiAnYmlsbGFibGUnfSk7XG4gICAgICB2YXIgJGNsb2NrV3JhcHBlciA9ICQoJzxkaXYgLz4nLCB7J2NsYXNzJzogJ2Nsb2NrLXdyYXBwZXInfSkuYXBwZW5kKCR0b3RhbENsb2NrKS5hcHBlbmQoJGJpbGxhYmxlQ2xvY2spO1xuICAgICAgdmFyICRlbnRyeSA9ICQoJzxkaXYgLz4nLCB7J2NsYXNzJzogJ2VudHJ5JywgJ2RhdGEtY2xvY2tzLWZvcic6IHBlcnNvbi5uYW1lfSkuYXBwZW5kKCRuYW1lKS5hcHBlbmQoJGNsb2NrV3JhcHBlcik7XG4gICAgICAkKCdbZGF0YS1jbG9ja3NdJykuYXBwZW5kKCRlbnRyeSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9O1xuXG4gIHZhciBpbml0Q2xvY2tzID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgcmVzcG9uc2UuZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uIChwZXJzb24pIHtcbiAgICAgIHZhciB0b3RhbENsb2NrID0gJCgnW2RhdGEtY2xvY2tzLWZvcj1cIicgKyBwZXJzb24ubmFtZSArICdcIl0gW2RhdGEtY2xvY2s9XCJ0b3RhbFwiXScpLkZsaXBDbG9jayh7XG4gICAgICAgIGF1dG9TdGFydDogcGVyc29uLmlzQWN0aXZlXG4gICAgICB9KTtcbiAgICAgIHZhciBiaWxsYWJsZUNsb2NrID0gJCgnW2RhdGEtY2xvY2tzLWZvcj1cIicgKyBwZXJzb24ubmFtZSArICdcIl0gW2RhdGEtY2xvY2s9XCJiaWxsYWJsZVwiXScpLkZsaXBDbG9jayh7XG4gICAgICAgIGF1dG9TdGFydDogcGVyc29uLmlzQWN0aXZlICYmIHBlcnNvbi5pc0JpbGxhYmxlXG4gICAgICB9KTtcbiAgICAgIHRvdGFsQ2xvY2suc2V0VGltZShwZXJzb24uaG91cnMudG90YWwgKiAzNjAwKTtcbiAgICAgIGJpbGxhYmxlQ2xvY2suc2V0VGltZShwZXJzb24uaG91cnMuYmlsbGFibGUgKiAzNjAwKTtcbiAgICAgIENsb2Nrc1twZXJzb24ubmFtZV0gPSB7XG4gICAgICAgIHRvdGFsOiB0b3RhbENsb2NrLFxuICAgICAgICBiaWxsYWJsZTogYmlsbGFibGVDbG9jayxcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHVwZGF0ZUNsb2NrcyA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIHJlc3BvbnNlLmVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiAocGVyc29uKSB7XG4gICAgICB2YXIgdG90YWxDbG9jayA9IENsb2Nrc1twZXJzb24ubmFtZV0udG90YWw7XG4gICAgICB2YXIgYmlsbGFibGVDbG9jayA9IENsb2Nrc1twZXJzb24ubmFtZV0uYmlsbGFibGU7XG5cbiAgICAgIHRvdGFsQ2xvY2suc2V0VGltZShwZXJzb24uaG91cnMudG90YWwgKiAzNjAwKTtcbiAgICAgIGJpbGxhYmxlQ2xvY2suc2V0VGltZShwZXJzb24uaG91cnMuYmlsbGFibGUgKiAzNjAwKTtcblxuICAgICAgdG90YWxDbG9jay5zdG9wKCk7XG4gICAgICBiaWxsYWJsZUNsb2NrLnN0b3AoKTtcbiAgICAgIGlmIChwZXJzb24uaXNBY3RpdmUpIHtcbiAgICAgICAgdG90YWxDbG9jay5zdGFydCgpO1xuICAgICAgICBpZiAocGVyc29uLmlzQmlsbGFibGUpIHtcbiAgICAgICAgICBiaWxsYWJsZUNsb2NrLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgaW5pdFZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgZ2V0UGVvcGxlc1RpbWVFbnRyaWVzKClcbiAgICAgIC50aGVuKGNvbnN0cnVjdFJvd3MpXG4gICAgICAuZG9uZShpbml0Q2xvY2tzKTtcbiAgfTtcblxuICB2YXIgdXBkYXRlVmlldyA9IGZ1bmN0aW9uKCkge1xuICAgIGdldFBlb3BsZXNUaW1lRW50cmllcygpXG4gICAgICAuZG9uZSh1cGRhdGVDbG9ja3MpO1xuICB9O1xuXG4gIENsb2NrLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaW5pdFZpZXcoKTtcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICB1cGRhdGVWaWV3KCk7XG4gICAgfSwgMTAwMCo2MCk7XG4gIH07XG5cbn0od2luZG93LkNsb2NrID0gd2luZG93LkNsb2NrIHx8IHt9LCBqUXVlcnkpKTtcbiIsIihmdW5jdGlvbihTY29yZWJvYXJkLCAkKSB7XG5cbiAgdmFyIHRvZ2dsZUhlYWRpbmdBbmRDbG9ja3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRoZWFkaW5nID0gJCgnaDEnKTtcbiAgICB2YXIgY3VycmVudFRleHQgPSAkaGVhZGluZy50ZXh0KCk7XG4gICAgdmFyIHVwZGF0ZWRUZXh0ID0gKGN1cnJlbnRUZXh0ID09PSAnQmlsbGFibGUgVGltZS4nKSA/ICdUb3RhbCBUaW1lJyA6ICdCaWxsYWJsZSBUaW1lJztcbiAgICAkaGVhZGluZy5odG1sKHVwZGF0ZWRUZXh0ICsgJzxhIGhyZWY9XCIjXCI+LjwvYT4nKTtcbiAgICAkKCdbZGF0YS1jbG9ja3NdJykuYXR0cignZGF0YS1hY3RpdmUtY2xvY2tzJywgdXBkYXRlZFRleHQpO1xuICB9O1xuXG4gIHZhciBiaW5kVUlBY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ2gxIGEnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0b2dnbGVIZWFkaW5nQW5kQ2xvY2tzKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgU2NvcmVib2FyZC5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgYmluZFVJQWN0aW9ucygpO1xuICB9O1xuXG59KHdpbmRvdy5TY29yZWJvYXJkID0gd2luZG93LlNjb3JlYm9hcmQgfHwge30sIGpRdWVyeSkpO1xuIiwiKGZ1bmN0aW9uKCkge1xuXG4gIFNjb3JlYm9hcmQuaW5pdCgpO1xuICBDbG9jay5pbml0KCk7XG5cbn0oKSk7XG4iXX0=
